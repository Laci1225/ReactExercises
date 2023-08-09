import React from "react";

export default function AddButton(props){
    return <button className="add-todo" onClick={props.add} type="submit">Add</button>
}