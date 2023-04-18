import React from "react";
import "./TodoItem.css";
import Trash from "../TodoItem/Trash.svg"
import Check from "../TodoItem/Check.svg"

function TodoItem(props) {


  return (
    <li className="TodoItem">

      <span
        className={`Icon Icon-check ${props.completed && 'imageCheck--active'}`} onClick={props.onComplete}
      >
        <img src={Check} alt="check" className="imageCheck" />
      </span>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <span className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <img src={Trash} alt="trash" className="imageTrash" />
      </span>

    </li>
  );
}

export { TodoItem };
