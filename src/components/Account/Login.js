
import { useContext } from "react"
import { LatestMessageContext } from "../../context/LatestMessage"
import { useState } from "react";
import "./_login.scss"
import http from "../../http-common";
export  function Login({ setLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { data,setData } = useContext(LatestMessageContext);

    const login = (e) => {
        e.preventDefault();
        http.post("/login",
            {
                username,
                password
            }
        ).then(response => {
            return response.data

        }).then(user => {
            if (user !== null) {
                setData({
                    ...data,
                    userId:user.userId
                })
                setLogin(true);
            }    
        })
    }


    return (
        <div className="login-form">
            <h1>Đăng nhập</h1>
            <div className="login-form__block">
                <p>Name:</p>
                <input placeholder="Tên" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="login-form__block">
                <p>Password:</p>
                <input placeholder="Password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={login}>Đăng nhập</button>
        </div>
    )
}