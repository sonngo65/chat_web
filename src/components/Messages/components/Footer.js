import { useState } from "react"

export default function Footer({sendMessage,userId}) {
    const [text,setText]=useState("");
    console.log(text);
    return (

        <div className="messages__footer">
            <input placeholder="Write a message..."
                id="user-message-input"
                value={text}
                onKeyDown={(event)=>sendMessage(event,text,userId)}
                onChange={(e)=>setText(e.target.value)}
            />
            <div className="messages__footer__actions">
                <i className="far fa-smile" />
                <i className="fas fa-paperclip" />
                <i className="mdi mdi-ticket-outline" />
                <button>Send</button>
            </div>
        </div>


    )
}