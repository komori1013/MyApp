import { ModalProps } from "../type/ModalProps";
import { HandleSubmitProps } from "../type/HandleSubmitProps";
import { Area } from "../type/Area";
import { Todo } from "../type/Todo";

export function Modal({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText, show, setShow, deadLine, setDeadLine }: ModalProps) {
  if (show) {
    return (
      <div className="overlay">
        <div className="content">
          <h3>予定</h3>
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
          <input type="time" value={deadLine} onChange={(event) => setDeadLine(event.target.value)} />
          <input type="submit" value="送信" onClick={() => handleSubmit({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText, deadLine, setDeadLine})} />
          <p><button onClick={() => setShow(false)}>閉じる</button></p>
        </div>
      </div>
    )
  }
  else return null;
};

function handleSubmit({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText, deadLine, setDeadLine}: HandleSubmitProps) {
  if (!text) return;
  if (ListBoxPlace === Area.HPHIPlACE) {
    const id: number = new Date().getTime();
    const newhPHI: Todo = {
      id: new Date().getTime(),
      text: text,
      deadLine: deadLine,
    }
    setHPHI({ [id]: newhPHI, ...hPHI });
    setText("");
    setDeadLine("");
  }
  else if (ListBoxPlace === Area.LPHIPlACE) {
    const id: number = new Date().getTime();
    const newlPHI: Todo = {
      id: new Date().getTime(),
      text: text,
      deadLine: deadLine,
    }
    setLPHI({ [id]: newlPHI, ...lPHI });
    setText("");
    setDeadLine("");
  }
  else if (ListBoxPlace === Area.HPLIPlACE) {
    const id: number = new Date().getTime();
    const newhPLI: Todo = {
      id: new Date().getTime(),
      text: text,
      deadLine: deadLine,
    }
    setHPLI({ [id]: newhPLI, ...hPLI });
    setText("");
    setDeadLine("");
  }
  else if (ListBoxPlace === Area.LPLIPlACE) {
    const id: number = new Date().getTime();
    const newlPLI: Todo = {
      id: new Date().getTime(),
      text: text,
      deadLine: deadLine,
    }
    setLPLI({ [id]: newlPLI, ...lPLI });
    setText("");
    setDeadLine("");
  }
};