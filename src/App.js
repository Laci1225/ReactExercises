import './App.css';
import Header from "./components/Header";
import InputFields from "./components/InputFields";


function App() {
    let id = 0;
    let todoArray = [];
    //const [todoArray, setTodoArray] = useState([]);


    const insertTodoInOrder = (todoElement) => {
        /*setTodoArray((prevState) => {
            return [...prevState, todoElement];
        });*/
        todoArray.push(todoElement);
        todoArray.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });

        const todoField = document.querySelector('.todo-fields');
        todoField.innerHTML = "";
        for (let i = 0; i < todoArray.length; i++) {
            const todoF = document.createElement("div");
            todoF.classList.add("flexx");
            todoF.innerHTML = `<div class="inpText" data-id=${todoArray[i].id}>${todoArray[i].text}</div>
                    <div class="inpDate">${todoArray[i].date}</div>
                    <button class="remove-todo">Remove</button>`;
            todoField.appendChild(todoF);
        }
        console.log(todoField);

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
        }));


    }
    const add = () => {
        //<AddFields insertTodoInOrder={insertTodoInOrder()} />
        const todoText = document.querySelector("#todoText").value;
        const todoDate = document.querySelector("#todoDate").value;
        /*(
            <div className="flexx">
                <div className="inpText" data-id={id}>${todoText}</div>
                <div className="inpDate">${todoDate}</div>
                <button className="remove-todo">Remove</button>
            </div>
        )*/
        const data = {
            text: todoText,
            date: todoDate,
            id: id++
        }
        insertTodoInOrder(data);
    }
    return (
        <div className="App">
            <Header/>
            <InputFields add={add}/>
            <div className="todo-fields"></div>
        </div>
    );
}

export default App;
