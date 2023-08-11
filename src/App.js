import './App.css';
import Header from "./components/Header";
import InputFields from "./components/InputFields";
import {useState} from "react";
import AddFields from "./components/AddFields";


let id = 0;

function App() {
    //let todoArray = [];
    const [todoArray, setTodoArray] = useState([]);

    const add = () => {
        const todoText = document.querySelector("#todoText").value;
        const todoDate = document.querySelector("#todoDate").value;
        const data = {
            text: todoText,
            date: todoDate,
            id: id++
        }
        console.log(data);
        setTodoArray((prevState) => {
            let a = [...prevState, data];
            return a.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
        });
    }
    return (
        <div className="App">
            <Header count={todoArray.length}/>
            <InputFields add={add}/>
            <AddFields tdArray={todoArray}/>
        </div>
    );
}

export default App;
