import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ShopContext } from '../../contexts/ShopContext';
import CampgroundsMap from '../../components/selectionMap/CampgroundsMap';
import H2 from "../../components/typography/H2";
import H3 from '../../components/typography/H3';
import CheckboxCard from "../../components/optionCards/CheckboxCard";
import PrimaryButton from '../../components/buttons/PrimaryButton';
import ErrorP from '../../components/typography/ErrorP';
import P from "../../components/typography/P";
import axios from 'axios';

function CampgroundForm() {
    const navigate = useNavigate();
    const { shopData, setShopData} = useContext(ShopContext);
    const [Campgrounds, setCampgrounds] = useState([
        {
            area: "Helheim",
            spots: "loading...",
            available: "loading..",
        },
        {
            area: "Svartheim",
            spots: "loading...",
            available: "loading.."
        },
        {
            area: "Alfheim",
            spots: "loading...",
            available: "loading.."
        },
        {
            area: "Nilfheim",
            spots: "loading...",
            available: "loading.."
        },
        {
            area: "Muspelheim",
            spots: "loading...",
            available: "loading.."
        }
    ]);
    const [activeCampground, setactiveCampground] = useState(null);
    const [formValid, setFormValid] = useState(true);
    const [checkOnChange, setcheckOnChange] = useState(false);

    useEffect(() => {
        console.log(shopData.greenCamping);
        axios.get("https://cphrt.herokuapp.com/available-spots")
            .then((response) => setCampgrounds(response.data));
    });

    useEffect(() => {
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.activeStep = 2;
            return newData;
        });
    }, [setShopData])
    
    function amountOfTickets(){
        return shopData.tickets.reduce((prev, cur) => prev + cur.amount, 0);
    }

    function displayFreeSpaces(NewCampgroundName){
        let newCampground = Campgrounds.find((campground) => {
            return campground.area === NewCampgroundName
        })

        setactiveCampground(newCampground);
    }

    function handleMapClick(campgroundName, event){
        displayFreeSpaces(campgroundName);
        if(checkOnChange){
            validate();
        }
    }

    function validate(){
        let isValid = activeCampground !== null && activeCampground.available > amountOfTickets();

        setFormValid(isValid);
        return isValid
    }

    function submit(event){
        event.preventDefault();
        setcheckOnChange(true);
        if(validate()){
            setShopData((oldData) => {
                let newData = {...oldData};
                newData.campground = activeCampground;
                return newData;
            });
            navigate("../personal-info")
        } 

    }

    function setCampsGreenly(value){
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.greenCamping.selected = value;
            return newData;
        })
    }
  return (
      <>
      <H2 classModifiers="mb-10 text-5xl">Step 3:</H2>
        <form className='grid grid-col-1 gap-4 lg:gap-8'>
            <div className='flex flex-col border border-white p-6 gap-4'>
                <H3 classModifiers="text-white">Choose your campground</H3>
                <P classModifiers="mb-6">Click a campground to check for avaliable spaces at your preferred campground. Toilets and hygiene facilites are installed at all campgrounds.</P>   
                <div className='grid row-start-2 w-full h-full'>
                    <CampgroundsMap value={activeCampground?.area} clickFunc={handleMapClick}></CampgroundsMap>
                    <div className='text-shade_darker_white break-words'>
                        {activeCampground?
                            <>
                                <P classModifiers="mt-5">There are <span className='font-bold text-accent_yellow'>{activeCampground.available}</span> avaliable spaces at <span className='font-bold text-accent_yellow'>{activeCampground.area}</span>.</P> 
                            </>: null
                        }
                    </div>
                </div>
            </div>
            <CheckboxCard {...shopData.greenCamping} price={shopData.greenCamping.price + " Kr."} value={shopData.greenCamping.selected} setValue={setCampsGreenly}></CheckboxCard>
        
        <div className='col-start-1 md:col-start-2 md:row-start-2 w-full flex flex-row justify-end'>
            {formValid? null : <ErrorP>Please select a campground with enough free spaces</ErrorP>}
            <PrimaryButton caption="Confirm" action={submit}></PrimaryButton>
        </div>       
    </form>
    </>
  )
}

export default CampgroundForm