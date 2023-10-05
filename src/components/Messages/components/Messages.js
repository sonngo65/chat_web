import Header from "./Header"
import "../style/_messages.scss"
import Footer from "./Footer"
import { LatestMessageContext } from "../../../context/LatestMessage"
import { useContext,use } from "react";
import { Message } from "./Message";
import UseSound from "use-sound";
import sound from "../../../common/SoundApp/sound";
export default function Messages() {
    const { data, setData } = useContext(LatestMessageContext);
    const { messages, currentFriend } = data;
    const { userId } = currentFriend;
    const friendMessages = messages[userId];
    const [sendSound] = UseSound(sound.SEND_MESSAGE_SOUND);

    const sendMessage = (event, text, userId, isUser = true) => {
        if (event.key === "Enter") {
            sendSound();

            setData({
                ...data,
                messages: {
                    ...messages,
                    [userId]: [...friendMessages, { text, isUser }]
                }
            }
            )
        }
    }
    console.log(messages);
    return (
        <div className="messages">
            <Header {...currentFriend} />
            <div className="messages__list" id="message-list">
                {friendMessages.map((message) => { return <Message {...message} /> })}
            </div>
            <Footer sendMessage={sendMessage} userId={userId} />
        </div>
    )
}