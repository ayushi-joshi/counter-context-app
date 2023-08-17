import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext';
import { decreaseNumber } from '../context/NumberAction';

const Decreasebutton = () => {
  const {dispatch}=useContext(NumberContext);
  const handleClick=()=>{
const data=decreaseNumber()
dispatch({
  type:data,
}) ;
};
  return (
    <button className="btn btn-danger rounded-0 w-100 my-3"onClick={handleClick}>Decrease</button>
  )
}

export default Decreasebutton
