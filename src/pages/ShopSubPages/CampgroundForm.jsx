import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import CampgroundsMap from '../../components/selectionMap/CampgroundsMap';
import CheckboxCard from "../../components/optionCards/CheckboxCard";
import PrimaryButton from '../../components/buttons/PrimaryButton';
import ErrorP from '../../components/typography/ErrorP';
import H3 from "../../components/typography/H2";
import H4 from "../../components/typography/H4";

function CampgroundForm() {
    const {setShopData} = useContext(ShopContext);
    const [activeCampground, setactiveCampground] = useState("");
    const [campsGreenly, setCampsGreenly] = useState(false);

    const Campgrounds = [
        {
            name: "Helheim",
            freeSpaces: "220",
        },
        {
            name: "Svartheim",
            freeSpaces: "330"
        },
        {
            name: "Alfheim",
            freeSpaces: "100"
        },
        {
            name: "Nilfheim",
            freeSpaces: "225"
        },
        {
            name: "Muspelheim",
            freeSpaces: "68"
        }
    ]
    const greenCampingOption = {
        title: "Green Camping",
        price: "249 Kr.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
        labelText: "add green Camping",
        imagePath: process.env.PUBLIC_URL + "/icons/leaf.svg"
    } 
    const [formValid, setFormValid] = useState(true);
    const [checkOnChange, setcheckOnChange] = useState(false);


    useEffect(() => {
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.activeStep = 2;
            return newData;
        });
    }, [setShopData])

    function displayFreeSpaces(NewCampgroundName){
        let newCampground = Campgrounds.filter((campground) => {
            return campground.name === NewCampgroundName
        })

        setactiveCampground(newCampground[0]);
    }

    function handleMapClick(campgroundName, event){
        displayFreeSpaces(campgroundName);
        if(checkOnChange){
            validate();
        }
    }

    function validate(){
        let isValid = activeCampground !== "";
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
                newData.greenCamping = campsGreenly ? greenCampingOption : null;
                return newData;
            })
        } 

    }
  return (
    <form className='grid grid-col-1 md:grid-col-2 gap-4'>
        <div className='col-start-1 md:max-h-96 w-full flex flex-col md:flex-row gap-4 bg-darkmode_black2 p-8'>
            <CampgroundsMap clickFunc={handleMapClick}></CampgroundsMap>
            <div className='text-shade_darker_white md:w-1/3 break-words'>
                <H3>choose your Campground</H3>
                {activeCampground?
                    <>
                        <H4>{activeCampground.name}</H4>
                        <p className='font-bodyFont text-lg'>
                            free spaces: {activeCampground.freeSpaces}
                        </p>
                    </>: null
                }
                
            </div>    
        </div>
        <div className='col-start-1 md:col-start-2'>
            <CheckboxCard {...greenCampingOption} setValue={setCampsGreenly}></CheckboxCard>
        </div>
        <div className='col-start-1 md:col-start-2 md:row-start-2 w-full flex flex-row justify-end'>
            {formValid? null : <ErrorP>Please select a Campground</ErrorP>}
            <PrimaryButton caption="Confirm" action={submit}></PrimaryButton>
        </div>       
    </form>
  )
}

export default CampgroundForm