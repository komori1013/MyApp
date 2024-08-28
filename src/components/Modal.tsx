import { ModalProps } from "../type/ModalProps";
import { HandleSubmitProps } from "../type/HandleSubmitProps";
import { Area } from "../type/Area";
import { Todo } from "../type/Todo";

export function Modal({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText, show, setShow}: ModalProps) {
  if (show) {
    return (
      <div className="overlay">
        <div className="content">
          <div>Add task</div>
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
          <p><input type="submit" value="Save" onClick={() => handleSubmit({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText})} />
        <button style ={{marginLeft: "10px"}}onClick={() => setShow(false)}>✕</button></p>
        </div>
      </div>
    )
  }
  else return null;
};

function handleSubmit({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText}: HandleSubmitProps) {
  if (!text) return;
  if (ListBoxPlace === Area.HPHIPlACE) {
    const id: number = new Date().getTime();
    const newhPHI: Todo = {
      id: new Date().getTime(),
      text: text,
      place: "HPHI",
    }
    setHPHI({ [id]: newhPHI, ...hPHI });
    setText("");
  }
  else if (ListBoxPlace === Area.LPHIPlACE) {
    const id: number = new Date().getTime();
    const newlPHI: Todo = {
      id: new Date().getTime(),
      text: text,
      place: "LPHI",
    }
    setLPHI({ [id]: newlPHI, ...lPHI });
    setText("");
  }
  else if (ListBoxPlace === Area.HPLIPlACE) {
    const id: number = new Date().getTime();
    const newhPLI: Todo = {
      id: new Date().getTime(),
      text: text,
      place: "HPLI",
    }
    setHPLI({ [id]: newhPLI, ...hPLI });
    setText("");
  }
  else if (ListBoxPlace === Area.LPLIPlACE) {
    const id: number = new Date().getTime();
    const newlPLI: Todo = {
      id: new Date().getTime(),
      text: text,
      place: "LPLI",
    }
    setLPLI({ [id]: newlPLI, ...lPLI });
    setText("");
  }
};