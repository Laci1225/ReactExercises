import {useRef} from "react";

export default function AddFields(props) {

    const alma = (tod) => {
        return (
            <div className="flexx">
                <div className="inpText" data-id={tod.id}>{tod.text}</div>
                <div className="inpDate">{tod.date}</div>
                <button className="remove-todo">Remove</button>
            </div>
        )
    }
    /*console.log(todoField);

    const rmButtons = document.querySelectorAll(".remove-todo");
    rmButtons.forEach(item => item.addEventListener('click', event => {
        const containerDiv = event.target.parentElement;
        for (let i = 0; i < todoArray.length; i++) {
            if (todoArray[i].id === parseInt(containerDiv.children[0].getAttribute("data-id"))) {
                todoArray.splice(i, 1);
                break;
            }
        }
        containerDiv.remove();
    }));*/

    return (
        <div className="todo-fields">
            {props.tdArray.map((todo) => {
                return (
                    <div key={todo.id}>{alma(todo)}</div>
                );
            })}
        </div>
    )
}