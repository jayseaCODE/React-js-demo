import React from 'react';
import "./ToDoItemsV2.css";

const ToDoItemsV2 = props => 
(
<ul className="Todo">
    {props.items.map((item, key) => (
        <li key={key}
            className={`${item.completed ? 'completed' : 'pending'}`}
        >
            {item.text}
            <div className="actions">
                <span   className={item.completed ? 'hide' : 'done'}
                        onClick={()=>props.markAsCompleted(item.id)}
                >
                    <i className="fa fa-check"/>
                </span>
                <span   className="trash"
                        onClick={()=>props.delete(item.key)}
                >
                    <i className="fa fa-trash"/>
                </span>
            </div>
        </li>
    ))}
</ul>
)

export default ToDoItemsV2;