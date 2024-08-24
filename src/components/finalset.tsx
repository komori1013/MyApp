import { start } from "repl";
import { Button } from "./Button";

export const Finalset = ({finalData, modal2, startLine,deadLine}:{finalData:finaltime[]; modal2:string;startLine:string;deadLine:string }) => {
  console.log(finalData);
  return(
    <ul className="time">
    {Object.values(finalData).map(preTodo => {
      return (
        <li  key={preTodo.id} style={{ height: preTodo.time}}>
          {modal2}
          <br/>
          {preTodo.starttime}～{preTodo.deadtime}
        </li>
      )
    })}
  </ul>
  );
}

const Finalset2 =({preTodo,modal2}:{preTodo:string,modal2:string}) => {
  const heading = document.getElementById("time2");
  const finalpreTodo = Number(preTodo); 
  if(heading){
  heading.style.height = finalpreTodo + "px";
  heading.style.color = "red";
  heading.style.marginTop = "-"+(1440 - finalpreTodo);
  };
  return(
  <div className="time2">
  {modal2}
  </div>
  );
};

type finaltime  = {
  id:number;
  starttime: number;
  deadtime: number;
  time:number;
  }