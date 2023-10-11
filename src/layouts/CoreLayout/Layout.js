
import { Outlet,Link } from "react-router-dom";
export default function layout(){
    return(
        <div className="layout-header">
            <ul>
                <li>
                    <Link to="/">Đăng nhập</Link>
                </li>
                <li>
                    <Link to="/register">Đăng ký</Link>
                    
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}