import { time } from "console";
import { Todo } from "../type/Todo";
export function Modal2({show2,setShow2,modal2,setModal2,startLine,setStartLine,deadLine,setDeadLine}:{show2:boolean; setShow2:Function, modal2:string, setModal2:Function, startLine:string,setStartLine:Function,deadLine:string,setDeadLine:Function }) {
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
          <input type="submit" value="送信" onClick={() => handleSubmit2(modal2,startLine,deadLine,setStartLine,setDeadLine)} />
        </div>
        <p><button onClick={() => setShow2(false)&& setModal2("")}>閉じる</button></p>
      </div>
    )
  }
  else return null;
};



function handleSubmit2 (modal3:string, startLine:string, deadLine:string,setStartLine:Function,setDeadLine:Function) {
  if (!startLine || !deadLine) return;
  let a = startLine.replace(":", "");
  let b = deadLine.replace(":", "");
  let c = parseInt(b)-parseInt(a);
  console.log(c);
  const heading = document.getElementById("time");
  if (heading) {
    heading.style.height = c + "px";
  }  
};
