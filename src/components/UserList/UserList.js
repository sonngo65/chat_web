
import UserProfile from "../../common/UserProfile";
import { useContext, useEffect } from "react";
import cx from "classnames";
import { LatestMessageContext } from "../../context/LatestMessage";
import "./_user-list.scss"
import http from "../../http-common";
function User({ userId, icon, name, lastMessage, online, lastActive, color, onClick }) {
    return (
        <div className="user-list__users__user" onClick={() => { onClick(userId) }}>
            <UserProfile icon={icon} name={name} color={color} lastMessage={lastMessage} />
            <div className="user-list__users__user__right-content">
                <div className="user-list__users__user__title">
                    <p>{name}</p>
                    <p className={cx({ 'user-list__users__user__online': online })}>
                        {online ? 'Online' : lastActive}
                    </p>
                </div>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}

export default function UserList() {

    const { data, setData } = useContext(LatestMessageContext)
    const { users } = data;
    
    const onClick = (userId) => {
        const newCurrentFriend = users.filter((user) => {
            return user.userId === userId;
        })[0];
        setData({
            ...data,
            currentFriend: newCurrentFriend

        })

    }
    const goBackHomeEvent = () => {
        setData({
            ...data,
            currentFriend: null

        })

    }
    const logoutEvent = () => {
        sessionStorage.setItem("data", JSON.stringify(null));
        sessionStorage.setItem("login", JSON.stringify(false));

    }
    return (
        <div className="user-list">
            <div className="user-list__header">
                <div className="user-list__header__left">
                    <p>All Messages</p>
                    <div className="user-list__header__dropdown">
                        <i className="fas fa-chevron-down" />
                        <div className="user-list__header__dropdown__content">
                            <a href="/new-connect"><p>Thêm kết nối</p></a>
                            <a href="/"><p onClick={goBackHomeEvent}>Home</p></a>
                            <a href="/"><p onClick={logoutEvent}>Đăng xuât</p></a>

                        </div>
                    </div>
                </div>

                <i className="fas fa-cog" />


            </div>
            <div className="user-list__users">
                {users.map((user) => {
                    return <User key={user.name} {...user} onClick={onClick} />
                })}
            </div>
        </div>
    )
}