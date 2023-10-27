import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/reducers/todo-reducer";

function TodoList() {
  const dispatch = useDispatch()
  const { todos } = useSelector((state) => state.todo);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="ml-5">
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.value}</span>
          <button className="border-solid border-2 border-sky-500 ml-3 pl-2 pr-3 rounded-lg">Edit</button>
          <button onClick={() => handleDelete(todo.id)} className="border-solid border-2 border-sky-500 ml-2 mt-2 pl-2 pr-2 rounded-lg">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
