import Header from "./Header"
import "../style/_messages.scss"
export default function Messages(){
    return (
        <div className="messages">
            <Header/>
            <div className="messages__list" id="message-list">

            </div>
        </div>
    )
}