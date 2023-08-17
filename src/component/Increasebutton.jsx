import React, { useContext } from 'react'
import NumberContext, { NumberProvider } from '../context/NumberContext';
import { increaseNumber } from '../context/NumberAction';

const Increasebutton = () => {
  const {dispatch}=useContext(NumberContext);
  const handleClick=()=>{
    const data=increaseNumber()
  dispatch({
    type: data,
  });
  };
  return (
    <button className="btn btn-success rounded-0 w-100 my-3" onClick={handleClick}>Increase</button>
  )
}

export default Increasebutton;
