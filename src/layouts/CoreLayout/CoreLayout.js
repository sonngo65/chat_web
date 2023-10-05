import LatestMessage from "../../context/LatestMessage";
import UserList from "../../components/UserList";
import Messages from "../../components/Messages";
import ContactPanel from "../../components/ContactPanel";
import "./_core-layout.scss"
export default function CoreLayout(){
    return (
        <div className="core">
            <LatestMessage>
                <UserList/>
                <Messages/>
                <ContactPanel/>
            </LatestMessage>
        </div>
    )
}