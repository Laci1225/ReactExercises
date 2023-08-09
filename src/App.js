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
            return a.date - b.date;
        });

        const todoField = document.querySelector('.todo-fields');
        todoField.innerHTML = "";
        console.log(todoArray)
        console.log(todoField);
        for (let i = 0; i < todoArray.length; i++) {
            const todoFiel = document.createElement("div");
            todoFiel.classList.add("flexx");
            todoFiel.innerHTML = `<div class="inpText" data-id=${id++}>${todoArray[i].text}</div>
                    <div class="inpDate">${todoArray[i].date}</div>
                    <button class="remove-todo">Remove</button>`;
            todoField.appendChild(todoFiel);
            /*<div className="flexx">
                <div className="inpText" data-id={id++}>${todoArray[i].text}</div>
                <div className="inpDate">${todoArray[i].date}</div>
                <button className="remove-todo">Remove</button>
            </div>*/
        }
        console.log(todoField);

        /*const rmButtons = document.querySelectorAll(".remove-todo");
        rmButtons.forEach(item => item.addEventListener('click', event => {
            const handleButtonClick = (event) => {
                return  event.target.parentElement;
            };
            const containerDiv = handleButtonClick();
            for (let i = 0; i < todoArray.length; i++) {
                if (todoArray[i].getAttribute("data-id") === containerDiv.getAttribute("data-id")) {
                    todoArray.splice(i, 1);
                    break;
                }
            }
            containerDiv.remove();
        }));*/

    }
    const add = () => {
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
            date: todoDate
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
