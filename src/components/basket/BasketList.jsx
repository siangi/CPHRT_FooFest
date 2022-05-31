import {React, useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import BasketArticle from "./BasketArticle";
import H4 from '../typography/H4';
import BasketTotal from './BasketTotal';

function BasketList(props) {
  const {shopData, setShopData} = useContext(ShopContext);


  function updateSomeAmount(){

  }

  function calculateTotal(){
    let subTotal = 0;
    subTotal += shopData.tickets.reduce((prev, cur) => prev + (cur.amount * cur.price), 0);
    subTotal += shopData.tents.reduce((prev, cur) => prev + (cur.price * cur.amountOfTents),0);
    if(shopData.greenCamping.selected){
      subTotal += shopData.greenCamping.price * shopData.tickets.reduce((prev, cur) => prev + cur.amount, 0);
    } 
    subTotal += shopData.bookingFee.price;
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