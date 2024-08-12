import { Todo } from "../type/Todo";

export function TodoBoard({Todos, setTodo}:{Todos:Todo[]; setTodo:Function}){
  return (
    <ul>
      {Object.values(Todos).map(todo => {
        return (
          <li key={todo.id}>
            <input className="margin" type="text" value={todo.text} />
            <button className="margin" onClick={()=>deleteTodo(Todos, setTodo, todo.id)}>削除</button>
          </li>
        )
      })}
    </ul>
  )
  };

  const deleteTodo = (Todos: {}, setTodos: Function, id: number) => {
    /*const {[id]: {}, ...rest} = Todos;
    setHPHI(Todos);
    */
    setTodos({ ...Todos, [id]: {} });
  };
  