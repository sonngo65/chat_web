import UserList from "../../components/UserList";
import Messages from "../../components/Messages";
import ContactPanel from "../../components/ContactPanel";
import { useEffect } from "react";
import { LatestMessageContext } from "../../context/LatestMessage";
import { useContext } from "react";
import http from "../../http-common";
export default function Home() {
    const { data, setData } = useContext(LatestMessageContext);
    const getUsersData = async () => {
        return await http.get(`users/friendship/${data.userId}`)
            .then((response) => {
                return response.data;
            })
    }
    
    const getMessagesData = async () => {
        console.log(data)
        return await http.get(`/messages/${data.userId}/${data.currentFriend.userId}`)
            .then((response) => {

                return response.data
            })
    }
    useEffect( () => {
        async function fetchData(){
     
            const users = await getUsersData()
            let messages = []
            if(data.currentFriend !== null){
                 messages = await getMessagesData();
            }
            console.log(users);

        setData((preData) => {
            return {
                ...data,
                currentFriend: preData.currentFriend === null ? users[0] : preData.currentFriend,
                users: preData.currentFriend === null ? users : [],
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
    fetchData();
    }, [])
    if (data.currentFriend === null) {
        console.log("nuuuuuuuuuuuuuuuuuuuuuuuuuuullllllllllll")
        return <></>
    }
    return <>
        <UserList />
        <Messages getMessagesData={getMessagesData}/>
        <ContactPanel />
    </>
}