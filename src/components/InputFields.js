import React, {useState} from "react";
import AddButton from "./AddButton";

export default function InputFields(props) {
    const [inputText, setTextValue] = useState('');
    const [inputDate, setDateValue] = useState('');
    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };
    const handleDateChange = (event) => {
        setDateValue(event.target.value);
    };

    return (
        <div className="inputFields">
            <div><label htmlFor="todoText"></label>
                <input id="todoText" type="text"
                       onChange={handleTextChange}/></div>
            <div><label htmlFor="todoDate"></label>
                <input id="todoDate" type="date"
                       onChange={handleDateChange}/></div>
            <AddButton add={props.add} textValue={inputText} dateValue={inputDate} id={props.id}/>
        </div>)
}