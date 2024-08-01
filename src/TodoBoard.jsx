import { useState } from 'react';
import './App.css';

const today = new Date();
const formatted = today.toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})
  .split("/")
  .join("-");

type ButtonProps = {
  setShow: Function;
  ListBoxPlace: string;
  setListBoxPlace: Function;
};

function Button({ setShow, ListBoxPlace, setListBoxPlace }: ButtonProps) {
  return (
    <button className='button' onClick={() => { setShow(true); setListBoxPlace(ListBoxPlace) }}>+</button>
  )
};

type ModalProps = {
  show: boolean;
  setShow: Function;
  text: string;
  setText: Function;
  hPHI: Todo[];
  setHPHI: Function;
  lPHI: Todo[];
  setLPHI: Function;
  hPLI: Todo[];
  setHPLI: Function;
  lPLI: Todo[];
  setLPLI: Function;
  ListBoxPlace: string;
};

function Modal({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText, show, setShow }: ModalProps) {
  if (show) {
    return (
      <div className="overlay">
        <div className="content">
          <p>予定</p>
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
          <input type="submit" onClick={() => handleSubmit({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText })} />
          <p><button onClick={() => setShow(false)}>close</button></p>
        </div>
      </div>
    )
  }
  else return null;
};

type HandleSubmitProps = {
  text: string;
  setText: Function;
  hPHI: Todo[];
  setHPHI: Function;
  lPHI: Todo[];
  setLPHI: Function;
  hPLI: Todo[];
  setHPLI: Function;
  lPLI: Todo[];
  setLPLI: Function;
  ListBoxPlace: string;
};

type Todo = {
  value: string;
  readonly id: number;
};

enum Area {
  HPHIPlACE = "HPHI",
  LPHIPlACE = "LPHI",
  HPLIPlACE = "HPLI",
  LPLIPlACE = "LPLI",
}

function handleSubmit({ ListBoxPlace, hPHI, setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI, text, setText }: HandleSubmitProps) {
  if (!text) return;
  if (ListBoxPlace === Area.HPHIPlACE) {
    const newhPHI: Todo = {
      value: text,
      id: new Date().getTime(),
    };
    setHPHI([newhPHI, ...hPHI]);
    setText("");
  }
  else if (ListBoxPlace === Area.HPLIPlACE) {
    const newlPHI: Todo = {
      value: text,
      id: new Date().getTime(),
    };
    setLPHI([newlPHI, ...lPHI]);
    setText("");
  }
  else if (ListBoxPlace === Area.LPHIPlACE) {
    const newhPLI: Todo = {
      value: text,
      id: new Date().getTime(),
    };
    setHPLI([newhPLI, ...hPLI]);
    setText("");
  }
  else if (ListBoxPlace === Area.LPLIPlACE) {
    const newlPLI: Todo = {
      value: text,
      id: new Date().getTime(),
    };
    setLPLI([newlPLI, ...lPLI]);
    setText("");
  }
};

function TaskBox({ todos, setTodos }: { todos: Todo[]; setTodos: Function }) {
  return (
    <ul>
      {todos.map((date) => {
        return (
          <li key={date.id}>
            <input type="text"
              value={date.value}/>
          </li>
        );
      })}
    </ul>
  )
};


export default function App() {
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [hPHI, setHPHI] = useState<Todo[]>([]);
  const [lPHI, setLPHI] = useState<Todo[]>([]);
  const [hPLI, setHPLI] = useState<Todo[]>([]);
  const [lPLI, setLPLI] = useState<Todo[]>([]);
  const [ListBoxPlace, setListBoxPlace] = useState<string>("");


  return (
    <>
      <header className='header'>{formatted}</header>
      <body className='container'>
        <div className='left-container'>
          <p>8:00</p>
          <br></br>
          <p>9:00</p>
          <br></br>
          <p>10:00</p>
          <br></br>
          <p>11:00</p>
          <br></br>
          <p>12:00</p>
          <br></br>
          <p>13:00</p>
          <br></br>
          <p>14:00</p>
          <br></br>
          <p>15:00</p>
          <br></br>
          <p>16:00</p>
          <br></br>
          <p>17:00</p>
        </div>

        <div className='right-container'>
          <Modal ListBoxPlace={ListBoxPlace} hPHI={hPHI} setHPHI={setHPHI} lPHI={lPHI} setLPHI={setLPHI} hPLI={hPLI} setHPLI={setHPLI} lPLI={lPLI} setLPLI={setLPLI} text={text} setText={setText} show={show} setShow={setShow} />
          <div className='right-high-container'>
            <div className='box1'>重要度高/優先度高
              <Button setShow={setShow} ListBoxPlace={"HPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox todos={hPHI} setTodos={setHPHI} />
            </div>
            <div className='box2'>重要度高/優先度低
              <Button setShow={setShow} ListBoxPlace={"HPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox todos={lPHI} setTodos={setHPLI} />
            </div>
          </div>
          <div className='right-row-container'>
            <div className='box3'>重要度低/優先度高
              <Button setShow={setShow} ListBoxPlace={"LPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox todos={hPLI} setTodos={setLPHI} />
            </div>
            <div className='box4'>重要度低/優先度低
              <Button setShow={setShow} ListBoxPlace={"LPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox todos={lPLI} setTodos={setLPLI} />
            </div>
          </div>
        </div>
      </body>
    </>
  )
};