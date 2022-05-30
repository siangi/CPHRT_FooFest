import React, {useContext, useEffect} from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import BasketList from '../../components/basket/BasketList';
import PaymentContainer from '../../components/paymentForms/PaymentContainer';

function Basket() {
  let {shopData, setShopData} = useContext(ShopContext);

  useEffect(() => {
    setShopData((oldData) => {
        let newData = {...oldData};
        newData.activeStep = 4;
        return newData;
    });
}, [setShopData])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>
      <div className='col-start-1'>
        <div className='bg-slate-100'>Tickets</div>
        <BasketList></BasketList>
      </div>
      <div className='col-start-1 md:col-start-2'>
        <PaymentContainer></PaymentContainer>
      </div>
      
    </div>
  )
}

export default Basket