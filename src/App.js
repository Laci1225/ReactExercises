import './App.css';
import Header from "./components/Header";
import InputFields from "./components/InputFields";
import {useState} from "react";
import AddFields from "./components/AddFields";

function App() {
    const [todoArray, setTodoArray] = useState([]);
    const [id, setId] = useState(0);

    const add = (data) => {
        setTodoArray((prevState) => {
            let a = [...prevState, data];
            return a.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
        });
        handleIdIncrease();
        console.log(data);
    }
    const handleIdIncrease = () => {
        setId(prevState => prevState + 1);
    };
    return (
        <div className="App">
            <Header count={todoArray.length}/>
            <InputFields add={add} id={id}/>
            <AddFields tdArray={todoArray}/>
        </div>
    );
}

export default App;
