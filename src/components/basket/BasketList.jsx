import {React, useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import BasketArticle from "./BasketArticle";
import H4 from '../typography/H4';
import BasketTotal from './BasketTotal';

function BasketList(props) {
  // const {shopData, setShopData} = useContext(ShopContext);
  // useEffect(() => {
  //   setShopData((oldData) => {
  //       let newData = {...oldData};
  //       newData.activeStep = 3;
  //       return newData;
  //   });
  // }, [setShopData])
  const shopData = {
    "tickets": [
      {
        "id": 0,
        "title": "Regular",
        "price": 799,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
        "imagePath": "/icons/RegularTicketGold.svg",
        "amount": 2
      },
      {
        "id": 1,
        "title": "VIP",
        "price": 1299,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
        "imagePath": "/icons/VIPGold.svg",
        "amount": 1
      }
    ],
    "tents": [
      {
        "id": 0,
        "title": "3 Person Tent",
        "price": 399,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
        "imagePath": "/images/3PersonTent.jpg",
        "spaceForPeople": 3,
        "amountOfTents": 1
      },
      {
        "id": 1,
        "title": "2 Person Tent",
        "price": 299,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
        "imagePath": "/images/2PersonTent.jpg",
        "spaceForPeople": 2,
        "amountOfTents": 0
      }
    ],
    "campground": {
      "name": "Nilfheim",
      "freeSpaces": "225"
    },
    "greenCamping": {
      "title": "Green Camping",
      "price": 249,
      "selected": true,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Tortor posuere ac ut consequat semper viverra.",
      "labelText": "add green Camping",
      "imagePath": "/icons/leaf.svg"
    },
    "bookingFee": {
      "title": "Booking Fee",
      "price": 99,
      "description": "Lorem Ipsum dolor Sit amet"
    },
    "persons": [
      {
        "id": 1,
        "firstname": "VIP 1",
        "lastname": "Fucker",
        "address": "Birketinget 6",
        "zip": "2300",
        "city": "Kobenahvn S",
        "email": "vip.fucker@gmx.ch",
        "phone": "078 840 13 33"
      },
      {
        "id": 2,
        "firstname": "Regular",
        "lastname": "GoodGuy",
        "address": "GoodGuyStreet",
        "zip": "2300",
        "city": "Kobenhavn S",
        "email": "simjdf@ljdsöf.dk",
        "phone": "112233445566"
      },
      {
        "id": 3,
        "firstname": "Dopest",
        "lastname": "Boy",
        "address": "Villa 1",
        "zip": "1111",
        "city": "Illcity",
        "email": "ill@ill.com",
        "phone": "+11 23 33 44 55 66"
      }
    ],
    "activeStep": 3
  }

  function updateSomeAmount(){

  }

  function calculateTotal(){
    let subTotal = 0;
    subTotal += shopData.tickets.reduce((prev, cur) => prev + (cur.amount * cur.price), 0);
    console.log("tickets " + subTotal );
    subTotal += shopData.tents.reduce((prev, cur) => prev + (cur.price * cur.amountOfTents),0);
    console.log("tents " + subTotal );
    if(shopData.greenCamping.selected){
      subTotal += shopData.greenCamping.price * shopData.tickets.reduce((prev, cur) => prev + cur.amount, 0);
    } 
    console.log("greenCamp " + subTotal );
    subTotal += shopData.bookingFee.price;
    console.log("bookingfee " + subTotal );
    return subTotal;
  }

  return (
    <div className='bg-darkmode_black2 text-shade_darker_white p-4'>
      <H4>Basket</H4>
      {
        shopData.tickets.filter((ticket) => ticket.amount > 0).map((ticket) =>
        {
          return <BasketArticle key={Math.random()} title={ticket.title + " Ticket"} price={ticket.price} amount={ticket.amount}></BasketArticle>
        })
      }
      {
        shopData.tents.filter((tent) => tent.amountOfTents > 0).map((tent) =>
        {
          return <BasketArticle key={Math.random()} title={tent.title + " Ticket"} price={tent.price} amount={tent.amountOfTents}></BasketArticle>
        })
      }
      { shopData.greenCamping.selected ? 
        <BasketArticle 
          key={Math.random()} 
          title={shopData.greenCamping.title} 
          price={shopData.greenCamping.price}
          amount={shopData.tickets.reduce((prev, cur) => prev + cur.amount, 0)}
        ></BasketArticle>
        : null}
      <BasketArticle title={shopData.bookingFee.title} price={shopData.bookingFee.price} amount={1} amountFixed={true}></BasketArticle>
      <BasketTotal title="Total" price={calculateTotal()}></BasketTotal>
    </div>
  )
}

export default BasketList