import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    //switch

};

export const TitleColorContextProvider = ({children}) => {

    // reducer é como se fosse um use state que controla mais coisas

    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple"});

    console.log("Title color reducer: ", state);

    return <TitleColorContext.Provider value={{...state}}>
        {children}
    </TitleColorContext.Provider>
}