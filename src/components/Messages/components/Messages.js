import Header from "./Header"
import "../style/_messages.scss"
import Footer from "./Footer"
import { LatestMessageContext } from "../../../context/LatestMessage"
import { useContext, useEffect } from "react";
import { Message } from "./Message";
import UseSound from "use-sound";
import sound from "../../../common/SoundApp/sound";
import http from "../../../http-common";


export default function Messages({getMessagesData}) {
    const destinationUrl = '/ws/simple-cat-box'
    const { data,setData } = useContext(LatestMessageContext);
    const { messages, currentFriend, userId, stompClient } = data;
    const friendId = currentFriend.userId;
    const [sendSound] = UseSound(sound.SEND_MESSAGE_SOUND);

    console.log(data)
    useEffect( () => {
        async function fetchData(){
        const messages = await getMessagesData();
        console.log(messages)
        setData(preData => {
            return {
                ...preData,
                messages: messages.map(
                    message => {
                        return {
                            text: message.text,
                            user: message.userSendId === preData.userId,
                            time: message.time
                        }
                    })
            }
        })
    }
    fetchData()
    }, [data.currentFriend])

    const sendMessage = (text, userId, friendId) => {
        let message = { text, userSendId: userId, userReceivedId: friendId };
        message = JSON.stringify(message);
        stompClient.send(destinationUrl, message);
    }


    const sendMessageEvent = (event, text, userId, friendId) => {
        console.log(userId,friendId)
        if (event.key === "Enter") {
            sendSound();
            sendMessage(text, userId, friendId);

        }
    }
    console.log(data);
    return (
        <div className="messages">
            <Header {...currentFriend} />
            <div className="messages__list" id="message-list">
                {messages && messages.map((message) => { return <Message {...message} /> })}
            </div>
            <Footer sendMessageEvent={sendMessageEvent} userId={userId} friendId={friendId} />
        </div>
    )
}