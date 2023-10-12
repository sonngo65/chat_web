import LatestMessage from "../../context/LatestMessage";
import {Login,Register} from "../../components/Account";
import "./_core-layout.scss";
import Home from "./Home";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import NewConnect from "../../components/NewConnect";
export default function CoreLayout() {
    const loginSession = useRef(null);
    const [login, setLogin] = useState(false);
    useEffect(()=>{
        setLogin(loginSession.current);
    },[])
    loginSession.current = JSON.parse(sessionStorage.getItem("login"));
    sessionStorage.setItem("login",JSON.stringify(login));
    return (
        <div className="core">
            <LatestMessage >
                  <BrowserRouter> 
                    <Routes>
                        <Route path="/" element={<Layout login={login}/>}>
                       
                                <Route path="" element={login ? <Navigate to={"home"} replace/> : <Login setLogin={setLogin} login={login} />}/>
                                <Route path="register" element={<Register setLogin={setLogin}/>}/>
                                <Route path="home" element={!login ? <Navigate to={""} replace/>:<Home/> }/>

                         
                             <Route path="new-connect" element={<NewConnect setLogin={setLogin}/>}/>
                        </Route>
                    </Routes>
               </BrowserRouter> 
                  {/* <Home /> */}
            </LatestMessage>
        </div>
    )
}