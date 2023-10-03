import { useState,createContext,useCallback, useContext } from "react";
import initialMessage from "./constants/initialMessage";
export const  LatestMessageContext = createContext({});

export default function LatestMessage({children}){
    const [messages,setMessages] = useState(initialMessage);
    return (
        <LatestMessageContext.Provider value={{messages,setMessages}}>
            {children}
        </LatestMessageContext.Provider>
    )
}