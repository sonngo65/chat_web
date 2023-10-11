import UserList from "../../components/UserList";
import Messages from "../../components/Messages";
import ContactPanel from "../../components/ContactPanel";
import { useEffect } from "react";
import { LatestMessageContext } from "../../context/LatestMessage";
import { useContext } from "react";
import http from "../../http-common";
export default function Home() {
    const {data,setData} = useContext(LatestMessageContext); 
    useEffect(()=>{
        console.log("home sassssssss");
        http.get(`users/friendship/${data.userId}`)
        .then((response) => {
            return response.data;
        }).then(users => {
            setData({
                ...data,
                currentFriend: users[0],
                users: users
            })
        })

    },[])
    if(data.currentFriend===null){
        return <></>
    }
    return <>
        <UserList />
        <Messages />
        <ContactPanel />
    </>
}