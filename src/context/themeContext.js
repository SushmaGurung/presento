import {  createContext, useEffect, useReducer, useState } from "react";

const INITIAL_STATE= {
    background:"#fff",
    text:"#111111",
    darktheme:false
}

export const ThemeContext= createContext(INITIAL_STATE);

const reducerfnc=(state,action)=>{
switch(action.type){
    case "DARK":
        return {background:"#111111", text: "#fff",darktheme:true} ;
    case "LIGHT":
        return {background:"#fff", text: "#111111",darktheme:false};
    case "TOGGLE":
        return {background:!state.background, text: !state.text,darktheme:!state.darktheme};
    default:
        return state;
}
}

const ThemeContextProvider=({children})=>{
    const [state, dispatch]= useReducer(reducerfnc, INITIAL_STATE);
    const [darkMode, setDarkMode]= useState(INITIAL_STATE);

    useEffect(()=>{
        const data= localStorage.getItem("darkmode");
        if(data){
            setDarkMode(JSON.parse(data));
        }
    },[]);
    // },[]); [] cause run one time only

    useEffect(()=>{
        localStorage.setItem("darkmode", JSON.stringify(darkMode))
    })
    return(
        <ThemeContext.Provider value={{state, darkMode, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;