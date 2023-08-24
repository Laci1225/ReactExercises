export default function TodoItem(props) {
    return (
        <div className="flexx">
            <div className="inpText" data-id={props.todo.id}>{props.todo.text}</div>
            <div className="inpDate">{props.todo.date}</div>
            <button className="remove-todo">Remove</button>
        </div>
    )
}