import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, addTodo } from "../redux/reducers/todo-reducer";

function TodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleToggle = (id) => {
    dispatch(addTodo(id));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <div className="mx-auto text-center mt-5">
      <div>
        <button className="text-white mt-3 rounded-full pl-3 pr-3 mr-5 bg-cyan-500 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 duration-300" onClick={() => setFilter("all")}>All</button>
        <button className="text-white mt-3 rounded-full pl-3 pr-3 mr-5 bg-cyan-500 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 duration-300" onClick={() => setFilter("active")}>Active</button>
        <button className="text-white mt-3 rounded-full pl-3 pr-3 mr-5 bg-cyan-500 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 duration-300" onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {filteredTodos.map((todo) => (
        <div key={todo.id} className="">
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.value}
          </span>
          <button className="ml-3 pl-3 pr-3 rounded-lg bg-orange-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 duration-300">Edit</button>
          <button onClick={() => handleDelete(todo.id)} className="ml-2 mt-2 pl-2 pr-2 rounded-lg bg-orange-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-red-900 duration-300">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
