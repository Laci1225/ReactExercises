import AddFields2 from "./AddFields2";

export default function AddFields(props) {
    return (
        <div className="todo-fields">
            {props.tdArray.map((todo) => {
                return (
                    <div key={todo.id}>
                        <AddFields2 todo={todo}/>
                    </div>
                );
            })}
        </div>
    )
}