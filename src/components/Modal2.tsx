import { time } from "console";
import { Todo } from "../type/Todo";
import { Area } from "../type/Area";
import { Finaltime } from "../type/Finaltime";

export function Modal2({hPHI ,setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI,modal2_1,modal2_2,finalData,setFinalData,show2,setShow2,modal2,setModal2,startLine,setStartLine,deadLine,setDeadLine}:{hPHI:Todo[] ,setHPHI:Function, lPHI:Todo[], setLPHI:Function, hPLI:Todo[], setHPLI:Function, lPLI:Todo[], setLPLI:Function,modal2_1:string,modal2_2:number,finalData:Finaltime[],setFinalData:Function,show2:boolean; setShow2:Function, modal2:string, setModal2:Function, startLine:string,setStartLine:Function,deadLine:string,setDeadLine:Function }) {
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
          <input type="submit" value="送信" onClick={() => handleSubmit2(hPHI ,setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI,modal2_1, modal2_2,finalData, setFinalData,modal2,startLine,deadLine,setStartLine,setDeadLine)} />
        </div>
        <p><button onClick={() => setShow2(false)&& setModal2("")}>閉じる</button></p>
      </div>
    )
  }
  else return null;
};



function handleSubmit2 (hPHI:Todo[] ,setHPHI:Function, lPHI:Todo[], setLPHI:Function, hPLI:Todo[], setHPLI:Function, lPLI:Todo[], setLPLI:Function,modal2_1:string, modal2_2:number, finalData:Finaltime[], setFinalData:Function, modal2:string, startLine:string, deadLine:string,setStartLine:Function,setDeadLine:Function) {
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

  if (g === "HPHI") {
    setHPHI(({[modal2_2]: {},...hPHI}) => {
      setHPHI({...hPHI});
  })}
  else if (g === "HPHI") {
    setLPHI(({[modal2_2]: {},...lPHI}) => {
      setLPHI({...lPHI});
  })}
  else if (g === "HPHI") {
    setHPLI(({[modal2_2]: {},...hPLI}) => {
      setHPLI({...hPLI});
  })}
  else if (g === "HPHI") {
    setLPLI(({[modal2_2]: {},...lPLI}) => {
      setLPLI({...lPHI});
  })}


type finaltime  =   {
  id:number;
  starttime: number;
  deadtime: number;
  data:string;
  time: number;
  place: string;
  }
};

  
