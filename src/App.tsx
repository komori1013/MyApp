
import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { TaskBox } from './components/TaskBox';
import { TodoBoard } from './components/TodoBoard';

const today = new Date();
const formatted = today.toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export default function App() {
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [hPHI, setHPHI] = useState([]);
  const [hPLI, setHPLI] = useState([]);
  const [lPHI, setLPHI] = useState([]);
  const [lPLI, setLPLI] = useState([]);
  const [eight, setEight] = useState([]);
  const [nine, setNine] = useState([]);
  const [ten, setTen] = useState([]);
  const [eleven, setEleven] = useState([]);
  const [twelve, setTwelve] = useState([]);
  const [thirteen, setThirteen] = useState([]);
  const [fourteen, setFourteen] = useState([]);
  const [fifteen, setFifteen] = useState([]);
  const [sixteen, setSixteen] = useState([]);
  const [seventeen, setSeventeen] = useState([]);
  const [ListBoxPlace, setListBoxPlace] = useState<string>("");
  const [deadLine, setDeadLine] = useState<string>("");

  return (
    <>
      <h2>{formatted}</h2>
      <body className='container'>
        <div className='left-container'>
          <h2>TodoBoard</h2>
          <table className='table'>
          <tr>
          <th className='time-width'>時間</th>
          <th className='todo-width'>内容</th>
          </tr>
          <tr>
            <td>8:00</td>
            <td><TodoBoard Todos={eight} setTodo={setEight}/></td>
          </tr>
          <tr>
            <td>9:00</td>
            <td><TodoBoard Todos={nine} setTodo={setNine}/></td>
          </tr>
          <tr>
            <td>10:00</td>
            <td><TodoBoard Todos={ten} setTodo={setTen}/></td>
          </tr>
          <tr>
            <td>11:00</td>
            <td><TodoBoard Todos={eleven} setTodo={setEleven}/></td>
          </tr>
          <tr>
            <td>12:00</td>
            <td><TodoBoard Todos={twelve} setTodo={setTwelve}/></td>
          </tr>
          <tr>
            <td>13:00</td>
            <td><TodoBoard Todos={thirteen} setTodo={setThirteen}/></td>
          </tr>
          <tr>
            <td>14:00</td>
            <td><TodoBoard Todos={fourteen} setTodo={setFourteen}/></td>
          </tr>
          <tr>
            <td>15:00</td>
            <td><TodoBoard Todos={fifteen} setTodo={setFifteen}/></td>
          </tr>
          <tr>
            <td>16:00</td>
            <td><TodoBoard Todos={sixteen} setTodo={setSixteen}/></td>
          </tr>
          <tr>
            <td>17:00</td>
            <td><TodoBoard Todos={seventeen} setTodo={setSeventeen}/></td>
          </tr>
          </table>
        </div>

        <div className='right-container'>
          <h2>TodoList</h2>
          <div className='right-high-container'>
            <Modal ListBoxPlace={ListBoxPlace} hPHI={hPHI} setHPHI={setHPHI} lPHI={lPHI} setLPHI={setLPHI} hPLI={hPLI} setHPLI={setHPLI} lPLI={lPLI} setLPLI={setLPLI} text={text} setText={setText} show={show} setShow={setShow} deadLine={deadLine} setDeadLine={setDeadLine}/>
            <div className='box1'>重要度 高 / 優先度 高
              <Button setShow={setShow} ListBoxPlace={"HPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox preTodos={hPHI} setPreTodos={setHPHI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen}/>
            </div>
            <div className='box2'>重要度 低 / 優先度 高
              <Button setShow={setShow} ListBoxPlace={"HPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox preTodos={hPLI} setPreTodos={setHPLI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen}/>
            </div>
          </div>
          <div className='right-row-container'>
            <div className='box3'>重要度 高 / 優先度 低
              <Button setShow={setShow} ListBoxPlace={"LPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox preTodos={lPHI} setPreTodos={setLPHI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen}/>
            </div>
            <div className='box4'>重要度 低 / 優先度 低
              <Button setShow={setShow} ListBoxPlace={"LPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox preTodos={lPLI} setPreTodos={setLPLI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen}/>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
