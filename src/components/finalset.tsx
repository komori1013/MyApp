import { start } from "repl";

export const Finalset = ({modal2, startLine,deadLine}:{modal2:string;startLine:string;deadLine:string }) => {
  return(
    <div className="time" id="time"> 
    {modal2}
    <br/>
    {startLine}～{deadLine}
    </div>
  );
}