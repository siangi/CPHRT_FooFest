import React, { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { useTimer } from "react-timer-hook";
import { ShopContext } from "../../contexts/ShopContext";
import { useNavigate } from "react-router-dom";
import BasketList from "../../components/basket/BasketList";
import PaymentContainer from "../../components/paymentForms/PaymentContainer";
import VisualTicket from "../../components/basket/VisualTicket";
import H2 from "../../components/typography/H2";
import P from "../../components/typography/P";

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
      <span className="text-accent_yellow text-[1.5rem]">
        {minutes > 0 && `${minutes} minutes and`} {seconds} seconds
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
    <div className="grid grid-cols-1 md:grid-cols-2 rows-start-2 gap-4 pt-5">
      <div className="col-start-1 grid">
        <div className="grid grid-cols-1 gap-5">
          <P classModifiers="text-white">
            *Please doublecheck your personal information before you confirm
          </P>

          <P classModifiers="text-white">
            You have <MyTimer expiryTimestamp={time} /> left to pay for your
            order.
          </P>

          {shopData.persons.map((ticketData) => (
            <VisualTicket className="" value={ticketData}></VisualTicket>
          ))}
        </div>
        <PaymentContainer
          confirmReservation={fulfillReservation}
        ></PaymentContainer>
      </div>
      <div className="col-start-1 row-start-1 md:col-start-2 w-full md:w-3/4 h-fit justify-self-end">
        <H2>Your basket</H2>
        <BasketList></BasketList>
      </div>
    </div>
  );
}

export default Basket;
