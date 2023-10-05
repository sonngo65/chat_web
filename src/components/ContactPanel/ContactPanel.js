

import cx from "classnames"
import { useState } from "react";
import "./_contact-panel.scss";
import UserProfile from "../../common/UserProfile";
import { LatestMessageContext } from "../../context/LatestMessage";
import { useContext } from "react";
export default function ContactPanel() {
    const [minimised, setMinimised] = useState(false);
    const onClick = () => {
        setMinimised(!minimised);
    }
    const { data } = useContext(LatestMessageContext);
    const { currentFriend } = data;
    return (
        <div className={cx('contact-panel', { 'contact-panel--minimised': minimised })}>
            <div className="contact-panel__header">
                <i className="mdi mdi-exit-to-app contact-panel__toggle" onClick={onClick} />
                <div className="contact-panel__header__profile">

                    {currentFriend.icon ?
                        <div className="contact-panel__header__profile__picture">
                            <i className="fas fa-comment-dots" />
                        </div> : <UserProfile name={currentFriend.name} icon={currentFriend.icon} color={currentFriend.color}/>}

                    <h1>{currentFriend.name}</h1>

                </div>
            </div>
            <div className="contact-panel__body">
                <div className="contact-panel__body__block">
                    <p className="contact-panel__body__label">
                        Phone
                    </p>
                    <p className="contact-panel__body__value">
                        0879896115
                    </p>
                </div>
                <div className="contact-panel__body__block">
                    <p className="contact-panel__body__label">
                        Labels
                    </p>
                    <p className="contact-panel__body__labels">
                        <p>Bot<i className="fas fa-times" /></p>
                        <p>React<i className="fas fa-times" /></p>
                    </p>
                </div>
                <div className="contact-panel__body__block">
                    <p className="contact-panel__body__label">
                        Labels
                    </p>
                    <p className="contact-panel__body__attachments">
                        <p><i className="fas fa-paperclip" />Dataset.csv</p>
                        <p><i className="far fa-image" />bot_face.jpg</p>
                    </p>
                    <p className="contact-panel__body__link">view all</p>
                </div>
                <button className="contact-panel__body__edit-btn">Edit Contact</button>

            </div>
        </div>
    )
}