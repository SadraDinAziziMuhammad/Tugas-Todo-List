import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";

function InputTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <div className="text-center mt-10">
      <form className="mx-auto">
        <input 
          className="border-solid border-2 border-black rounded pl-3"
          type="text"
          placeholder="What to do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick} className="ml-2 bg-purple-600 pr-3 pl-3 rounded-md border-solid border-2 border-purple-700 text-white">Add</button>
      </form>
    </div>
  );
}

export default InputTodo;
