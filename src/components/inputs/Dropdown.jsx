// import {React, useState} from 'react';
// import ErrorP from "../typography/ErrorP";

// export default function Dropdown(props) {
//     const [isValid, setIsValid] = useState(true)
//     const options = require('country-codes-list')
//     const [countryCode, setCountryCode] = React.useState();
//     const countryCallingCodesObject = options.customList('+{countryCallingCode}');

//   function handleBlur(event){
//     setIsValid(event.target.checkValidity());
//   }
//   function handleOnInvalid(){
//     if(isValid){
//       setIsValid(false);
//     }
// }
//     function handleChange(event){
//         setCountryCode(event.target.value);
//         }  
    
// return (
//     <div className='my-3 w-full'>
//       <label htmlFor={props.id} className="text-red_white font-bodyFont">{props.label}</label>
//       {!isValid ? <ErrorP>{props.errormessage}</ErrorP> : null}

//       <select 
//         id={props.id}
//         name={props.name}
//         required={props.required}
//         className="form-select w-full bg-darkmode_black8 border-none text-shade_darker_white font-bodyFont focus:ring-accent_yellow focus:ring-2"
//         onChange={handleChange}>
//             {countryCallingCodesObject.map((option) => <option key={option.value} value={option.value} className="font-bodyFont text-base appearance-none">{option.caption}</option>)}
//       </select>

//         {/* <select name={props.name}  id={props.id} onChange={handleChange}>
//             Object.entries(countryCallingCodesObject).map(([key, value]) =>  <option value={countryCallingCodesObject[key].value}>{countryCallingCodesObject[key].label}</option>)
//         </select> */}
//     </div>
//     )
// }