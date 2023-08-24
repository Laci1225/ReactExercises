import React from "react";

export default function AddButton(props) {
    return <button className="add-todo" onClick={props.onClick} type="submit">Add</button>
}