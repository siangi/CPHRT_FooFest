import React from 'react';
import P from '../typography/P';
import NumberStepper from '../inputs/NumberStepper';

function BasketArticle(props) {
  return (
    <li className='grid grid-cols-4 mb-2'>
      <P classModifiers="col-start-1 col-end-3 self-center">{props.title} {!props.amountFixed?` (${props.price}.-)`: ""}</P>
      <div className='col-start-3 self-center'>
        {!props.amountFixed && <NumberStepper updateAmount={() => {}} initialVal={props.amount} small={true}></NumberStepper>}
      </div>
      <P classModifiers="col-start-4 self-center">{props.amount * props.price}.-</P>
    </li>
  )
}

export default BasketArticle