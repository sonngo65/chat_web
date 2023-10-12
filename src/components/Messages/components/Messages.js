import Header from "./Header"
import "../style/_messages.scss"
import Footer from "./Footer"
import { LatestMessageContext } from "../../../context/LatestMessage"
import { useContext } from "react";
import { Message } from "./Message";
import UseSound from "use-sound";
import sound from "../../../common/SoundApp/sound";


export default function Messages() {
    const destinationUrl = '/ws/simple-cat-box'
    const { data } = useContext(LatestMessageContext);
    const { messages, currentFriend, userId, stompClient } = data;
    const friendId = currentFriend.userId;
    const [sendSound] = UseSound(sound.SEND_MESSAGE_SOUND);



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