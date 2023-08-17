import React from 'react'
import Number from './component/Number'
import Increasebutton from './component/Increasebutton'
import Decreasebutton from './component/Decreasebutton'
import { NumberProvider } from './context/NumberContext'
import EvenNumber from './component/EvenNumber'

const App = () => {
  return (
   <NumberProvider>
   <div className="container p-5">
    <Number/>
    <Increasebutton/>
    <Decreasebutton/>
    <EvenNumber/>
   </div>
   </NumberProvider>
  );
}

export default App

      
