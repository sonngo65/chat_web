import LatestMessage from "../../context/LatestMessage";
import UserList from "../../components/UserList";
import Messages from "../../components/Messages";
import "./_core-layout.scss"
export default function CoreLayout(){
    return (
        <div className="core">
            <LatestMessage>
                <UserList/>
                <Messages/>
            </LatestMessage>
        </div>
    )
}