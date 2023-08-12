import React from "react";

export default function AddButton(props) {
    return <button className="add-todo" onClick={() => props.add(
        {
            text: props.textValue,
            date: props.dateValue,
            id: props.id
        }
    )} type="submit">Add</button>
}