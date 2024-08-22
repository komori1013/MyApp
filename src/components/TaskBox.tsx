import { TaskBoxProps } from "../type/TaskBoxProps";
import { Todo } from "../type/Todo";
import { Modal2 } from "./Modal2";


export function TaskBox({ modal2, setModal2,show2, setShow2, preTodos, setPreTodos, eight, setEight, nine, setNine, ten, setTen, eleven, setEleven, twelve, setTwelve, thirteen, setThirteen, fourteen, setFourteen, fifteen, setFifteen, sixteen, setSixteen, seventeen, setSeventeen}: TaskBoxProps) {
  return (
    <ul>
      {Object.values(preTodos).map(preTodo => {
        return (
          <li key={preTodo.id}>
            <button className="margin" onClick={() => setshowmodal2(preTodo.text, setModal2,setShow2)}>←</button>
            <input className="margin" type="text" value={preTodo.text} />
            <button className="margin" onClick={() => editTodo(preTodos, setPreTodos, preTodo.id, prompt("new Text:"), prompt('New deadline:'))}>編集</button>
            <button className="margin" onClick={() => deleteTodo(preTodos, setPreTodos, preTodo.id)}>削除</button>
          </li>
        )
      })}
    </ul>
  )
};

const setshowmodal2 = (text: string, setmodal2:Function, setShow2:Function) => {
setShow2(true);
setmodal2(text);
};


const editTodo = (Todos: {}, setTodos: Function, id: number, newText: string | null, newDeadLine: string | null) => {
  setTodos({ ...Todos, [id]: { id: id, text: newText, deadLine: newDeadLine } });
};


const deleteTodo = (Todos: {}, setTodos: Function, id: number) => {
  /*const {[id]: {}, ...rest} = Todos;
  setHPHI(Todos);
  */
  setTodos({ ...Todos, [id]: {} });
};

