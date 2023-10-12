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
        console.log(data)
        http.get(`users/friendship/${data.userId}`)
        .then((response) => {
            return response.data;
        }).then(users => {
            console.log(users);
            setData((preData)=> { 
                console.log(users);
                return {
                ...data,
                currentFriend: preData.currentFriend === null ? users[0] : preData.currentFriend ,
                users: preData.currentFriend === null ? users : []
            }})
            
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