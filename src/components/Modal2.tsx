import { time } from "console";
import { Todo } from "../type/Todo";
export function Modal2({modal2_1,finalData,setFinalData,show2,setShow2,modal2,setModal2,startLine,setStartLine,deadLine,setDeadLine}:{modal2_1:string,finalData:finaltime[],setFinalData:Function,show2:boolean; setShow2:Function, modal2:string, setModal2:Function, startLine:string,setStartLine:Function,deadLine:string,setDeadLine:Function }) {
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
          <input type="submit" value="送信" onClick={() => handleSubmit2(modal2_1, finalData, setFinalData,modal2,startLine,deadLine,setStartLine,setDeadLine)} />
        </div>
        <p><button onClick={() => setShow2(false)&& setModal2("")}>閉じる</button></p>
      </div>
    )
  }
  else return null;
};



function handleSubmit2 (modal2_1:string, finalData:finaltime[], setFinalData:Function, modal2:string, startLine:string, deadLine:string,setStartLine:Function,setDeadLine:Function) {
  const id: number = new Date().getTime();
  let a = startLine.replace(":","");
  let b = deadLine.replace(":","");
  const c = Number(a);
  const d = Number(b);
  const e = modal2
  let startHours = Number(startLine.split(":")[0]);
  let startMinites = Number(startLine.split(":")[1]);
  let startSeconds = startHours*60 + startMinites;
  let deadHours = Number(deadLine.split(":")[0]);
  let deadMinites = Number(deadLine.split(":")[1]);
  let deadSeconds = deadHours*60 + deadMinites;
  let f = deadSeconds - startSeconds;
  let g = modal2_1



  const newfinalData: finaltime = {
    id: new Date().getTime(),
    starttime: c,
    deadtime: d,
    data: e,
    time: f,
    place: g
  }
  setFinalData({ [id]: newfinalData, ...finalData });
  }
  
type finaltime  =   {
  id:number;
  starttime: number;
  deadtime: number;
  data:string;
  time: number;
  place: string;
  }


  
