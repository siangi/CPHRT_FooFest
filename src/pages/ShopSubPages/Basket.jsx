import React, { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { useTimer } from "react-timer-hook";
import { ShopContext } from "../../contexts/ShopContext";
import { useNavigate } from "react-router-dom";
import BasketList from "../../components/basket/BasketList";
import PaymentContainer from "../../components/paymentForms/PaymentContainer";
import VisualTicket from "../../components/basket/VisualTicket";
import H2 from "../../components/typography/H2";

function MyTimer({ expiryTimestamp }) {
  const navigate = useNavigate();
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setTimeout(() => navigate("/failure"), 1500);
      window.scrollTo({ top: 0 });
    },
  });

  return (
    <>
      <span className='text-accent_yellow'>
      0{minutes > 0 && `${minutes}:`}{seconds} 
      </span>
    </>
  );
}

function Basket() {
  const API_KEY = "62961c39c4d5c3756d35a3d6";
  const DB_URL = "https://cphrtfoofest-74ae.restdb.io/rest/orders";
  let reservationID = useRef();
  let { shopData, setShopData } = useContext(ShopContext);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300000 / 1000); // milliseconds / 1000 => seconds

  function reserveSpots() {
    return axios
      .put("https://cphrt.herokuapp.com/reserve-spot", {
        area: shopData.campground.area,
        amount: shopData.tickets.reduce((prev, cur) => prev + cur.amount, 0),
      })
      .then((response) => {
        if (response.data.message === "Reserved") {
          reservationID.current = response.data.id;
        } else {
          console.error("unable to reserve spaces!", response);
        }
      });
  }

  async function fulfillReservation(goDeeper = true) {
    let returnVal = false;
    if (reservationID !== "") {
      await axios
        .post("https://cphrt.herokuapp.com/fullfill-reservation", {
          id: reservationID.current,
        })
        .then((response) => {
          if (response.data.message === "Reservation completed") {
            saveShopData();
            returnVal = true;
          }
        });

      if (!returnVal && goDeeper) {
        // if the reservation expired try to make a new one, if that one fails, the user has to choose
        // a different campground.
        returnVal = await reserveSpots().then(() => fulfillReservation(false));
      } else if (!goDeeper) {
        returnVal = false;
      }
    }
    return returnVal;
  }

  function saveShopData() {
    axios.post(
      DB_URL,
      { shopData: JSON.stringify(shopData) },
      { headers: { "x-apikey": API_KEY } }
    );
  }

  useEffect(() => {
    setShopData((oldData) => {
      let newData = { ...oldData };
      newData.activeStep = 4;
      return newData;
    });
  }, [setShopData]);

  useEffect(() => {
    reserveSpots();
  });

  return (
    <>
    <div className="flex justify-end mb-6 items-baseline gap-4">
      <H2><MyTimer expiryTimestamp={time} /></H2>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-0'>
      <div className='grid col-start-1 row-start-2 md:row-start-1'> 
        {shopData.persons.map((ticketData) => (
          <VisualTicket className='' value={ticketData}></VisualTicket>
          ))}
      </div>

      <div className='w-full lg:w-3/4 justify-self-end h-fit'>
        <div className='grid col-start-1 md:col-start-2 lg:col-start-2 row-start-2 md:row-start-1'>
          <H2 classModifiers='text-5xl'>Your basket</H2>
          <BasketList></BasketList>
        </div>
      </div>

      <div className='w-full lg:w-3/4 justify-self-end grid col-start-1 md:col-start-2 row-start-3 md:row-start-2'>
        <PaymentContainer
          confirmReservation={fulfillReservation}></PaymentContainer>
      </div>
    </div>
    </>
  );
}

export default Basket;
