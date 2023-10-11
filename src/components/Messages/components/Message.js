import cx from "classnames";
export function Message({ text, user}) {

    return (
        <div className={cx("messages__list__message",{"messages__list__message-user":  user})}>
            <p>{text}</p>
        </div>
    )
}