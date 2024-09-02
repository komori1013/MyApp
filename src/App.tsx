import dayjs from "dayjs";
import { Timeline } from "./components/Timeline";
import { useState } from 'react';
import './assets/App.css';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { TaskBox } from './components/TaskBox';
import { TodoBoard } from './components/TodoBoard';
import { Modal2 } from "./components/Modal2";
import { Finalset } from "./components/finalset";
import { useEffect } from 'react';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';

export class Finaltime {
  id: number;
  starttime: number; 
  deadtime: number; 
  data: string;
  time: number;
  place: string;
constructor(id: number, starttime: number, deadtime: number, data: string, time:number, place:string) {
  this.id = id;
  this.starttime= starttime;
  this.deadtime= deadtime;
  this.data= data;
  this.time= time;
  this.place= place;
}};

export default function App() {
  const [modal2, setModal2] = useState<string>(""); 
  const [modal2_1, setModal2_1] = useState<string>(""); 
  const [modal2_2, setModal2_2] = useState<number>(0); 
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [hPHI, setHPHI] = useState<any[]>([]);
  const [hPLI, setHPLI] = useState<any[]>([]);
  const [lPHI, setLPHI] = useState<any[]>([]);
  const [lPLI, setLPLI] = useState<any[]>([]);
  const [eight, setEight] = useState<any[]>([]);
  const [nine, setNine] = useState<any[]>([]);
  const [ten, setTen] = useState<any[]>([]);
  const [eleven, setEleven] = useState<any[]>([]);
  const [twelve, setTwelve] = useState<any[]>([]);
  const [thirteen, setThirteen] = useState<any[]>([]);
  const [fourteen, setFourteen] = useState<any[]>([]);
  const [fifteen, setFifteen] = useState<any[]>([]);
  const [sixteen, setSixteen] = useState<any[]>([]);
  const [seventeen, setSeventeen] = useState<any[]>([]);
  const [ListBoxPlace, setListBoxPlace] = useState<string>("");
  const [startLine, setStartLine] = useState<string>("");
  const [deadLine, setDeadLine] = useState<string>("");
  const [finalData, setFinalData] = useState<any[]>([]);
  
  const day = dayjs().format('YYYY年MM月DD日');

  const saveToLocalStorage = () => {
    const data = {
      finalData,
      modal2,
      hPHI,
      lPHI,
      hPLI,
      lPLI,
      modal2_1,
      modal2_2,
      show2,
    };
    localStorage.setItem('myAppData', JSON.stringify(data));
    console.log(data);
  };

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('myAppData');
    if (savedData) {
      const parsedata = JSON.parse(savedData);
      setFinalData(parsedata.finalData);
      setModal2(parsedata.modal2);
      setHPHI(parsedata.hPHI);
      setLPHI(parsedata.lPHI);
      setHPLI(parsedata.hPLI);
      setLPLI(parsedata.lPLI);
      setModal2_1(parsedata.modal2_1);
      setModal2_2(parsedata.modal2_2);
      setShow2(parsedata.show2);
      console.log(parsedata);
    }
  };

  const clearFromLocalStorage = () => {
    localStorage.removeItem('myAppData');
  };
  return (
    <>
      <header className="header">
      <CalendarMonthSharpIcon style={{fontSize: 24 }} /> 
      <span className="title">Todo Board</span> 
      <span>{day}</span>
      <span className="title3">
      <button onClick={saveToLocalStorage}>save</button>
      <button onClick={loadFromLocalStorage}>load</button>
      <button onClick={clearFromLocalStorage}>clear</button>
      </span>
      </header>
      <body className='container'>

        <div className="left-container">
        <div className="title1">予定</div>
          <Timeline/>
          <Finalset finalData={finalData} setFinalData={setFinalData} modal2 = {modal2} hPHI={hPHI} setHPHI={setHPHI} lPHI={lPHI} setLPHI={setLPHI} hPLI={hPLI} setHPLI={setHPLI} lPLI={lPLI} setLPLI={setLPLI}/>
        </div>

        <div className='right-container'>
          <div className="title2">タスク</div>
          <div className='right-high-container'>
            <Modal ListBoxPlace={ListBoxPlace} hPHI={hPHI} setHPHI={setHPHI} lPHI={lPHI} setLPHI={setLPHI} hPLI={hPLI} setHPLI={setHPLI} lPLI={lPLI} setLPLI={setLPLI} text={text} setText={setText} show={show} setShow={setShow}/>
            <Modal2 hPHI={hPHI} setHPHI={setHPHI} lPHI={lPHI} setLPHI={setLPHI} hPLI={hPLI} setHPLI={setHPLI} lPLI={lPLI} setLPLI={setLPLI} modal2_1={modal2_1} modal2_2={modal2_2} finalData= {finalData} setFinalData={setFinalData}show2={show2} setShow2={setShow2} modal2={modal2} setModal2={setModal2} startLine={startLine} setStartLine={setStartLine} deadLine={deadLine} setDeadLine={setDeadLine}/>
            <div className='box1'>重要度 高 / 優先度 高
              <Button setShow={setShow} ListBoxPlace={"HPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox setModal2_2={setModal2_2} setModal2_1={setModal2_1} modal2={modal2} setModal2={setModal2} show2={show2} setShow2={setShow2} preTodos={hPHI} setPreTodos={setHPHI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
            <div className='box2'>重要度 低 / 優先度 高
              <Button setShow={setShow} ListBoxPlace={"HPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox setModal2_2={setModal2_2} setModal2_1={setModal2_1} modal2={modal2} setModal2={setModal2} show2={show2} setShow2={setShow2} preTodos={hPLI} setPreTodos={setHPLI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
          </div>
          <div className='right-row-container'>
            <div className='box3'>重要度 高 / 優先度 低
              <Button setShow={setShow} ListBoxPlace={"LPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox setModal2_2={setModal2_2} setModal2_1={setModal2_1} modal2={modal2} setModal2={setModal2} show2={show2} setShow2={setShow2} preTodos={lPHI} setPreTodos={setLPHI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
            <div className='box4'>重要度 低 / 優先度 低
              <Button setShow={setShow} ListBoxPlace={"LPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox setModal2_2={setModal2_2} setModal2_1={setModal2_1} modal2={modal2} setModal2={setModal2} show2={show2} setShow2={setShow2} preTodos={lPLI} setPreTodos={setLPLI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
