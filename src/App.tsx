import dayjs from "dayjs";
import { Timeline } from "./components/Timeline";
import { useState } from 'react';
import './assets/App.css';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { TaskBox } from './components/TaskBox';
import { TodoBoard } from './components/TodoBoard';


const today = dayjs().format("YYYY-MM-DD");



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
  
  const weekStartDayOffset = 0;
  const _date = dayjs(); //
  const _day = _date.day();
  const dayList = Array(7)
    .fill(0)
    .map((_, idx) => {
      const day = weekStartDayOffset + idx;
      const dayFormat = dayjs(
        _date.date(_date.date() - _day + weekStartDayOffset + idx)
      );
      return { day: day, date: dayFormat.format("YYYY-MM-DD") };
    });

  return (
    <>
      <body className='container'>

        <div className="left-container">
          <Timeline/>
        </div>

        <div className='right-container'>
          <div className='right-high-container'>
            <Modal ListBoxPlace={ListBoxPlace} hPHI={hPHI} setHPHI={setHPHI} lPHI={lPHI} setLPHI={setLPHI} hPLI={hPLI} setHPLI={setHPLI} lPLI={lPLI} setLPLI={setLPLI} text={text} setText={setText} show={show} setShow={setShow}/>
            <div className='box1'>重要度 高 / 優先度 高
              <Button setShow={setShow} ListBoxPlace={"HPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox preTodos={hPHI} setPreTodos={setHPHI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
            <div className='box2'>重要度 低 / 優先度 高
              <Button setShow={setShow} ListBoxPlace={"HPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox preTodos={hPLI} setPreTodos={setHPLI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
          </div>
          <div className='right-row-container'>
            <div className='box3'>重要度 高 / 優先度 低
              <Button setShow={setShow} ListBoxPlace={"LPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox preTodos={lPHI} setPreTodos={setLPHI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
            <div className='box4'>重要度 低 / 優先度 低
              <Button setShow={setShow} ListBoxPlace={"LPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox preTodos={lPLI} setPreTodos={setLPLI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
