import cx from "classnames";
export function Message({ text, isUser}) {

    return (
        <div className={cx("messages__list__message",{"messages__list__message-user": isUser})}>
            <p>{text}</p>
        </div>
    )
}