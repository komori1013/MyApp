import { TaskBoxProps } from "../type/TaskBoxProps";
import { Todo } from "../type/Todo";


export function TaskBox({ preTodos, setPreTodos, eight, setEight, nine, setNine, ten, setTen, eleven, setEleven, twelve, setTwelve, thirteen, setThirteen, fourteen, setFourteen, fifteen, setFifteen, sixteen, setSixteen, seventeen, setSeventeen}: TaskBoxProps) {
  return (
    <ul>
      {Object.values(preTodos).map(preTodo => {
        return (
          <li key={preTodo.id}>
            <button className="margin" onClick={()=> moveTodo(preTodos, setPreTodos, preTodo.id, preTodo.text, prompt("time:"), eight, setEight, nine, setNine, ten, setTen, eleven, setEleven, twelve, setTwelve, thirteen, setThirteen, fourteen, setFourteen, fifteen, setFifteen, sixteen, setSixteen, seventeen, setSeventeen)}>←</button>
            <input className="margin" type="text" value={preTodo.text} />
            <input className="margin" type="time" value={preTodo.deadLine}/>
            <button className="margin" onClick={() => editTodo(preTodos, setPreTodos, preTodo.id, prompt("new Text:"), prompt('New deadline:'))}>編集</button>
            <button className="margin" onClick={() => deleteTodo(preTodos, setPreTodos, preTodo.id)}>削除</button>
          </li>
        )
      })}
    </ul>
  )
};


const moveTodo = (preTodos: Todo[], setPreTodos: Function, id: number, text: string, time: string | null, eight :Todo[], setEight: Function, nine :Todo[], setNine: Function, ten :Todo[], setTen: Function, eleven :Todo[], setEleven: Function, twelve :Todo[], setTwelve: Function, thirteen :Todo[], setThirteen: Function, fourteen :Todo[], setFourteen: Function, fifteen :Todo[], setFifteen: Function, sixteen :Todo[], setSixteen: Function, seventeen :Todo[], setSeventeen: Function) => {
  if(time === "8"){
  setEight({...eight, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time === "9"){
  setNine({...nine, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time?.includes("10")){
  setTen({...ten, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time?.includes("11")){
  setEleven({...eleven, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time?.includes("12")){
  setTwelve({...twelve, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time?.includes("13")){
  setThirteen({...thirteen, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time?.includes("14")){
  setFourteen({...fourteen, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time?.includes("15")){
  setFifteen({...fifteen, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time?.includes("16")){
  setSixteen({...sixteen, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else if(time?.includes("17")){
  setSeventeen({...seventeen, [id]: {id: id, text:text}})
  setPreTodos({ ...preTodos, [id]: {} })
}
else return null;
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

