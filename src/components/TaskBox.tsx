import { TaskBoxProps } from "../type/TaskBoxProps";
import { Todo } from "../type/Todo";
import { Modal2 } from "./Modal2";


export function TaskBox({setModal2_2,setModal2_1, modal2, setModal2,show2, setShow2, preTodos, setPreTodos, eight, setEight, nine, setNine, ten, setTen, eleven, setEleven, twelve, setTwelve, thirteen, setThirteen, fourteen, setFourteen, fifteen, setFifteen, sixteen, setSixteen, seventeen, setSeventeen}: TaskBoxProps) {
  return (
    <ul>
      {Object.values(preTodos).map(preTodo => {
        return (
          <li key={preTodo.id}>
            <button className="margin" onClick={() => setshowmodal2(preTodo.id,preTodo.text, preTodo.place,setModal2,setShow2,setModal2_1,setModal2_2)}>Plan</button>
            <input className="margin2" type="text" value={preTodo.text} />
            <button className="margin" onClick={() => editTodo(preTodos, setPreTodos, preTodo.id, prompt("new Text:"), prompt('New deadline:'))}>Edit</button>
            <button className="margin" onClick={() => deleteTodo(preTodos, setPreTodos, preTodo.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
};

const setshowmodal2 = (id: Number,text: string, place: string, setmodal2:Function, setShow2:Function, setModal2_1:Function, setModal2_2:Function) => {
setShow2(true);
setmodal2(text);
setModal2_1(place);
setModal2_2(id);
};


const editTodo = (Todos: {}, setTodos: Function, id: number, newText: string | null, newDeadLine: string | null) => {
  setTodos({ ...Todos, [id]: { id: id, text: newText, deadLine: newDeadLine } });
};

const deleteTodo = (Todos: {}, setTodos: Function, id: number) => {
  /*const {[id]: {}, ...rest} = Todos;
  setHPHI(Todos);
  */
  setTodos(({[id]: {},...Todos }) => {
  setTodos({...Todos});
  })
};