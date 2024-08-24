import { time } from "console";
import { Todo } from "../type/Todo";
export function Modal2({finalData,setFinalData,show2,setShow2,modal2,setModal2,startLine,setStartLine,deadLine,setDeadLine}:{finalData:finaltime[],setFinalData:Function,show2:boolean; setShow2:Function, modal2:string, setModal2:Function, startLine:string,setStartLine:Function,deadLine:string,setDeadLine:Function }) {
  if (show2) {
    return (
      <div className="overlay">
        <div className="content">
          予定
          <h3>{modal2}</h3>
          <hr />
          <div>開始時間</div>
          <input type="time" value={startLine} onChange={(event) => setStartLine(event.target.value)}  />
          <div>終了時間</div>
          <input type="time" value={deadLine} onChange={(event) => setDeadLine(event.target.value)} />
          <input type="submit" value="送信" onClick={() => handleSubmit2(finalData, setFinalData,modal2,startLine,deadLine,setStartLine,setDeadLine)} />
        </div>
        <p><button onClick={() => setShow2(false)&& setModal2("")}>閉じる</button></p>
      </div>
    )
  }
  else return null;
};



function handleSubmit2 (finalData:finaltime[], setFinalData:Function, modal3:string, startLine:string, deadLine:string,setStartLine:Function,setDeadLine:Function) {
let a = startLine.replace(":", "");
let b = deadLine.replace(":", "");
let startHours = Number(startLine.split(":")[0]);
let startMinites = Number(startLine.split(":")[1]);
let startSeconds = startHours*60 + startMinites;
let endHours = Number(deadLine.split(":")[0]);
let endMinites = Number(deadLine.split(":")[1]);
let endSeconds = endHours*60 + endMinites;
let c = endSeconds - startSeconds;

const heading = document.getElementById("time");
  const id: number = new Date().getTime();
  const newfinalData: finaltime = {
    id: new Date().getTime(),
    starttime: startSeconds,
    deadtime: endSeconds,
    time: c
  }
  setFinalData({ [id]: newfinalData, ...finalData });
  }


type finaltime  = {
  id:number;
  starttime: number;
  deadtime: number;
  time:number;
  }

  
