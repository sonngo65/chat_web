import { useState,useContext } from "react"
import "./_new-connect.scss";
import http from "../../http-common";
import { LatestMessageContext } from "../../context/LatestMessage";
import { useNavigate } from "react-router-dom";
export default function NewConnect({setLogin}) {
    const [newConnectId,setNewConnectId] = useState("");
    const {data,setData} = useContext(LatestMessageContext);
    console.log(data);
    const navigate = useNavigate();
    const  connectOnclick = ()=>
    {

        http.get(`/user/${newConnectId}`)
        .then((response)=>{
            return response.data
        })
        .then((user)=>{
            console.log(user);
            setData((preData) => {return {...preData,
                currentFriend: user
            }})
            setLogin(true);
            navigate("/home");
        })
    }
    return (
    <div className="new-connect">
        <h1>Thêm liên kết mới: </h1>
        <input type="text" onChange={(e)=>{setNewConnectId(e.target.value)}} placeholder="nhập Id muốn kết nối"/>
        <button onClick={connectOnclick}>Thêm</button>
    </div>)

}