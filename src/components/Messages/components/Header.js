import UserProfile from "../../../common/UserProfile"
import "../style/_messages.scss";
import { LatestMessageContext } from "../../../context/LatestMessage";
import { useContext } from "react";
import cx from "classnames";
export default function Header({ isOnline, name, icon, color, lastActive }) {
    return (
        <div className="messages__header">
            <div className="messages__header__left-content">
                <UserProfile name={name} icon={icon} color={color} />
                <div className={cx("messages__header__left-content__text",{"isOnline": isOnline})}>
                    <h1>{name} </h1>
                    {isOnline ? <div className="messages__header__online-dot" /> : <div>{lastActive}</div>}
                </div>
            </div>
            <div className="messages__header__right-content">
                <div className="messages__header__status">
                    <i className="mdi mdi-eye-outline" />
                    <p className="no-margin">botty-beep-boop</p>
                </div>
                <div className="messages__header__status">
                    <i className="far fa-clock" />
                    <p className="no-margin">5m</p>
                </div>
            </div>
        </div>

    )
}