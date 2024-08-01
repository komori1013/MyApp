import { useState } from "react";
import "./App.css";

class Todo{
  constructor(id, text, deadline){
    this.id = id;
    this.text = text;
    this.deadline = deadline;
  }
};

const [todos, setTodos] = useState({});
const [text, setText] = useState("");
const [deadline, setDeadline] = useState("");

const addTodo = () => {
  const id = newDate().getTime().toString();
  const newTodo = new Todo(id, text, deadline);
  setTodos(prevTodos => ({...prevTodos, [id]: newTodo}));
  setText("");
  setDeadline("");
};

const editTodo = (id, newText, newDeadline) => {
  setTodos(prevTodos => ({...prevTodos,[id]:{...prevTodos[id], text: newText, deadline: newDeadline}}));
};

const deleteTodo = (id) => {
  const {[id]: _, ...rest} = todos;
  setTodos(rest);
};

return(
<div>
  <h1>TodoBoard</h1>
  <input type="text"
  value={text}
  onChange={(e)=>setText(e.target.value)}
  placeholder="Todo text"/>
  <input type="date"
  value={deadline}
  onChange={(e)=>setDeadline(e.target.value)}/>
  <button onClick={addTodo}>AdoTodo</button>

  <ul>
  {Object.values(todos).map(todo => (
          <li key={todo.id}>
            <span>{todo.text} - {todo.deadline}</span>
            <button onClick={() => editTodo(todo.id, prompt('New text:'), prompt('New deadline:'))}>
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

  export default Todo;



