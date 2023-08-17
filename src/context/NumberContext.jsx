import  {createContext, useReducer} from "react";
import NumberReducer from "./NUmberReducer";
const NumberContext=createContext();
export const NumberProvider=({children})=>{
    const initialState={
        number:0,
        evenNumber:2,
    };
    const [state, dispatch]=useReducer(NumberReducer, initialState)
   
    return(
        <NumberContext.Provider value={{ ...state, dispatch}}>
            {children}
            </NumberContext.Provider>
    );
};

export default NumberContext;
