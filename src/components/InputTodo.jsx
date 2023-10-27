import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";

function InputTodo() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    console.log(input);
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <div>
      <form className="mt-10 ml-5">
        <input 
        className="border-solid border-2 border-black rounded"
          type="text"
          placeholder="input todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick} className="ml-2">Add</button>
      </form>
    </div>
  );
}

export default InputTodo;
