import React, { useState } from "react";

const TodoList = () => {
  const [listItems, setListItems] = useState("");
  const [enteredItems, setEnteredItems] = useState([]);
  return (
    <div>
      <input
        value={listItems}
        onChange={(e) => {
          setListItems(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setEnteredItems([...enteredItems, listItems]);
        }}
      >
        Add
      </button>
      <ul>
        {enteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
