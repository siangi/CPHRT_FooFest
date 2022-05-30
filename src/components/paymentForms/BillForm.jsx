import React from 'react';
import PersonForm from '../PersonForm';

function BillForm() {
  return (
    <div>
      <PersonForm
        billing={true}
      ></PersonForm>
    </div>
  )
}

export default BillForm