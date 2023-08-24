import './App.css';
import Header from "./components/Header";
import InputFields from "./components/InputFields";
import {useState} from "react";
import TodoList from "./components/TodoList";
import compareTodos from "./utils/todoSort";

let id = 0;

function App() {
    const [todos, setTodos] = useState([]);

    const add = (data) => {
        setTodos((prevState) => [...prevState, {...data, id: id++}].sort(compareTodos));
    }
    return (
        <div className="App">
            <Header count={todos.length}/>
            <InputFields onAdd={add}/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
