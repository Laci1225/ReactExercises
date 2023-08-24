import TodoItem from "./TodoItem";

export default function TodoList(props) {
    return (
        <div className="todo-fields">
            {props.todos.map((todo) => {
                return (
                    <TodoItem todo={todo} key={todo.id}/>
                );
            })}
        </div>
    )
}