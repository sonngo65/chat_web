import { useState, createContext, useCallback, useContext, useEffect, useRef } from "react";
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import http from "./../../http-common";
export const LatestMessageContext = createContext({});

export default function LatestMessage({ children }) {
    const destinationUrl = '/ws/simple-cat-box'
    const relativeWsConnectUrl = '/ws/connect';
    const WsConnectUrl = `http://localhost:9090${relativeWsConnectUrl}`;
    const [data, setData] = useState({ users: [], messages: [], currentFriend: null, userId: null, stompClient : null });
    const session = useRef(null); 
    console.log(session.current);
    console.log("sssssadddddddddddddddddddddddddddddddddddddddd")
    useEffect(() => {
        console.log(session.current)
        if (session.current!== null) {
            setData((preData) => { return{ ...preData, userId: session.current}});
        }
    } , [])
    session.current =  sessionStorage.getItem('data')
    sessionStorage.setItem("data", data.userId);
  
    useEffect(() => {
        console.log('gjgg');
        const stompClient = webstomp.over(SockJS(WsConnectUrl));
        stompClient.connect({}, () => {

            setData((preData) => { return { ...preData, stompClient: stompClient } });
            stompClient.subscribe(destinationUrl, (newState) => {
                console.log(newState);
                const message = JSON.parse(newState.body);
                if (message.output !== undefined) {
                    setData(preState => {
                        return {
                            ...preState, messages:
                                ((message.userSendId === preState.userId && message.userReceivedId === preState.currentFriend.userId)
                                    || (message.userSendId === preState.currentFriend.userId && message.userReceivedId === preState.userId))
                                    ? [
                                        ...preState.messages,
                                        {
                                            text: message.text,
                                            user: message.userSendId === preState.userId,
                                            time: message.time
                                        }
                                    ] : [...preState.messages]

                        }
                    })
                }
            });

        })

    }, [])


    console.log(data);
    return (
        <LatestMessageContext.Provider value={{ data, setData }}>
            {children}
        </LatestMessageContext.Provider>
    )
}