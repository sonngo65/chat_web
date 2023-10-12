import { useState,useContext } from "react";
import http from "../../http-common"
import { LatestMessageContext } from "../../context/LatestMessage";

export function Register({setLogin}) {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [image,setImage] = useState(null);
    const {setData} = useContext(LatestMessageContext);
    let form = new FormData();
    const onRegister = (e)=>{
        e.preventDefault();
        form.append("file",image);
        form.append("user", JSON.stringify({
            name,
            password
            
        }))
        http.post("/users",form,{
            headers:{
                "Content-Type":"multipart/form-data"          }
        }).then(response => {
            return response.data;
        }).then(data => {
            
            setData((preData) => {
                return {
                    ...preData,
                    userId: data.userId,
                    currentFriend:  data
                }
            })
            setLogin(true);
        })
    }
   
    return (
        
        <div className="login-form">
            <h1>Đăng ký</h1>
            <div className="login-form__block">
                <p>Name:</p>
                <input placeholder="Tên" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="login-form__block">
                <p>Password:</p>
                <input placeholder="Password" type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="login-form__block">
                <p>image:</p>
                <input placeholder="Password" type="file"  onChange={(e)=>setImage(e.target.files[0])} />
            </div>
          
            <button onClick={onRegister}>Đăng ký</button>
        </div>
    )
}