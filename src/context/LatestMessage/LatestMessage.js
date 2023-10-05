import { useState, createContext, useCallback, useContext } from "react";
import initialMessage from "./constants/initialMessage";
import userList from "./constants/users";

export const LatestMessageContext = createContext({});

export default function LatestMessage({ children }) {
    const currentFriend = {
        name: 'Botty',
        userId: 'bot',
        icon: 'fas fa-comment-dots',
        isOnline: true, color: '#4DB8EF',
        lastMessage: 'Xin chào tôi là Sơn ChatBot!'
    };
    const [data, setData] = useState({ users: userList, messages: initialMessage, currentFriend: currentFriend});
    return (
        <LatestMessageContext.Provider value={{ data, setData }}>
            {children}
        </LatestMessageContext.Provider>
    )
}