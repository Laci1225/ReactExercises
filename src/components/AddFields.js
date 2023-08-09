export default function AddFields(props) {
    const todoText = document.querySelector("#todoText").value;
    const todoDate = document.querySelector("#todoDate").value;
    const a = (
        <div className="flexx">
            <div className="inpText" data-id={props.id}>${todoText}</div>
            <div className="inpDate">${todoDate}</div>
            <button className="remove-todo">Remove</button>
        </div>
    )
    props.insertTodoInOrder(a);

    return a;

}