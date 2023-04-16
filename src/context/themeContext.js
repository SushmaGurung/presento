import {  createContext, useReducer } from "react";

const INITIAL_STATE= {
    background:"light",
    text:"dark",
    darktheme:false
}

export const ThemeContext= createContext(INITIAL_STATE);

const reducerfnc=(state,action)=>{
switch(action.type){
    case "DARK":
        return {background:"dark", text: "light",darktheme:true} ;
    case "LIGHT":
        return {background:"light", text: "dark",darktheme:false};
    case "TOGGLE":
        return {background:!state.background, text: !state.text,darktheme:!state.darktheme};
    default:
        return state;
}
}

const ThemeContextProvider=({children})=>{
    const [state, dispatch]= useReducer(reducerfnc, INITIAL_STATE);

    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;