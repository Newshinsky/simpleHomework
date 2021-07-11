import React from 'react'
import s from './Message.module.css'
type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: PropsType) {
    return (
        <div className={s.messageWrapper}>
            <div className={s.ava}>
                <img src={props.avatar} alt="ava" />
            </div>
            <div className={s.message}>
                <div className={s.triangle}>
                </div>
                <div className={s.name}>
                    <p> {props.name}</p>
                </div>
                <div className={s.text}>
                    <p>{props.message}</p>
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
