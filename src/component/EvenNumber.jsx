import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext'
import { checkEven } from '../context/NumberAction';
const EvenNumber = () => {
    const {evenNumber, dispatch}=useContext(NumberContext);
    const handleChange=(e)=>{
const data= checkEven(e.target.value);
dispatch({
    type:"CHECK_EVEN",
    payload:parseInt(data)
})
    };
  return (
    <>
    <input type="number" className='mt-3 form-control rounded-0'
     onChange={handleChange}/>
    <h1 className='text-center mt-3'>Even: </h1>
    <h1 className= {evenNumber %2 ===0 ? "dispaly-1 text-center text-success" : "dispaly-1 text-center text-danger"}>
        {evenNumber %2 ===0 ? "Even number" : "Odd number"}</h1>
    </>
  )
};

export default EvenNumber;
