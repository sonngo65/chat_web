import LatestMessage from "../../context/LatestMessage";
import {Login,Register} from "../../components/Account";
import "./_core-layout.scss";
import Home from "./Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
export default function CoreLayout() {

    const [login, setLogin] = useState(false);

    return (
        <div className="core">
            <LatestMessage >
                {!login ? <BrowserRouter> 
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                             <Route path="/" element={<Login setLogin={setLogin}/>}/>
                             <Route path="/register" element={<Register/>}/>

                        </Route>
                    </Routes>
               </BrowserRouter> 
                 : <Home />}
            </LatestMessage>
        </div>
    )
}