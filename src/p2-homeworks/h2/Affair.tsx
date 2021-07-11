import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback:Function // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
              <button onClick={deleteCallback}>X</button>
           <span className={s.name}> {props.affair.name} </span>
           <span className={s.priority}> {props.affair.priority} </span>
        </div>
    )
}

export default Affair
