import React from "react";
import AddButton from "./AddButton";

export default function InputFields(props) {
    return (
        <div className="inputFields">
            <div><label htmlFor="todoText"></label><input id="todoText" type="text" required/></div>
            <div><label htmlFor="todoDate"></label><input id="todoDate" type="date"/></div>
            <AddButton add={props.add}/>
        </div>)
}