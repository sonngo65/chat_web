
import UserProfile from "../../common/UserProfile";
import { useContext } from "react";
import cx from "classnames";
import { LatestMessageContext } from "../../context/LatestMessage";
import "./_user-list.scss"
function User({ userId,icon, name, lastMessage, isOnline, lastActive, color,onClick }) {
    return (
        <div className="user-list__users__user" onClick={()=>{onClick(userId)}}>
            <UserProfile icon={icon} name={name} color={color} lastMessage={lastMessage} />
            <div className="user-list__users__user__right-content">
                <div className="user-list__users__user__title">
                    <p>{name}</p>
                    <p className={cx({ 'user-list__users__user__online': isOnline })}>
                        {isOnline ? 'Online' : lastActive}
                    </p>
                </div>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}

export default function UserList() {

    const { data,setData } = useContext(LatestMessageContext)
    const {users} = data;
    const onClick = (userId)=>
    {
        const newCurrentFriend = users.filter((user)=>{
            return user.userId === userId;
        })[0];
        console.log(newCurrentFriend);
        setData({
            ...data,
            currentFriend:  newCurrentFriend
                
        })

    }
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
                    return <User key={user.name} {...user} onClick={onClick}/>
                })}
            </div>
        </div>
    )
}