
import UserProfile from "../../common/UserProfile";
import { useContext } from "react";
import cx from "classnames";
import { LatestMessageContext } from "../../context/LatestMessage";
import users from "./constants/users";
import "./_user-list.scss"
function User({ icon, name, userId, isOnline, lastActive, color }) {
    const { messages } = useContext(LatestMessageContext)
    return (
        <div className="user-list__users__user">
            <UserProfile icon={icon} name={name} color={color} />
            <div className="user-list__users__user__right-content">
                <div className="user-list__users__user__title">
                    <p>{name}</p>
                    <p className={cx({ 'user-list__users__user__online': isOnline })}>
                        {isOnline ? 'Online' : lastActive}
                    </p>
                </div>
                <p>{messages[userId]}</p>
            </div>
        </div>
    )
}

export default function UserList() {

    console.log(users)
    return (
        <div className="user-list">
            <div className="user-list__header">
                <div className="user-list__header__left">
                    <p>All Messages</p>
                    <i className="fas fa-chevron-down" />
                </div>
                <i className="fas fa-cog" />
            </div>
            <div className="user-list__users">
                {users.map((user) => {
                    return <User key={user.name} {...user} />
                })}
            </div>
        </div>
    )
}