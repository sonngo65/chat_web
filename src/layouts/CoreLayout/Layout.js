
import { Outlet,Link } from "react-router-dom";
export default function layout(login){
    return(
        
        <div className="layout-header" >
           
            <Outlet/>
        </div>
    )
}