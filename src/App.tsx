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

const today = dayjs().format("YYYY-MM-DD");



export default function App() {
  const [modal2, setModal2] =useState(""); 
  const [modal2_1, setModal2_1] =useState(""); 
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
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
  const [startLine, setStartLine] = useState<string>("");
  const [deadLine, setDeadLine] = useState<string>("");
  const [finalData,setFinalData] = useState([]);
  
  const day = dayjs().format('YYYY-MM-DD')
  
  return (
    <>
      <header className="header">{day}</header>
      <body className='container'>

        <div className="left-container">
          <Timeline/>
          <Finalset finalData={finalData} modal2 = {modal2} hPHI={hPHI} setHPHI={setHPHI} lPHI={lPHI} setLPHI={setLPHI} hPLI={hPLI} setHPLI={setHPLI} lPLI={lPLI} setLPLI={setLPLI}/>
        </div>

        <div className='right-container'>
          <div className='right-high-container'>
            <Modal ListBoxPlace={ListBoxPlace} hPHI={hPHI} setHPHI={setHPHI} lPHI={lPHI} setLPHI={setLPHI} hPLI={hPLI} setHPLI={setHPLI} lPLI={lPLI} setLPLI={setLPLI} text={text} setText={setText} show={show} setShow={setShow}/>
            <Modal2 modal2_1={modal2_1} finalData= {finalData} setFinalData={setFinalData}show2={show2} setShow2={setShow2} modal2={modal2} setModal2={setModal2} startLine={startLine} setStartLine={setStartLine} deadLine={deadLine} setDeadLine={setDeadLine}/>
            <div className='box1'>重要度 高 / 優先度 高
              <Button setShow={setShow} ListBoxPlace={"HPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox setModal2_1={setModal2_1} modal2={modal2} setModal2={setModal2} show2={show2} setShow2={setShow2} preTodos={hPHI} setPreTodos={setHPHI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
            <div className='box2'>重要度 低 / 優先度 高
              <Button setShow={setShow} ListBoxPlace={"HPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox setModal2_1={setModal2_1} modal2={modal2} setModal2={setModal2} show2={show2} setShow2={setShow2} preTodos={hPLI} setPreTodos={setHPLI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
          </div>
          <div className='right-row-container'>
            <div className='box3'>重要度 高 / 優先度 低
              <Button setShow={setShow} ListBoxPlace={"LPHI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox setModal2_1={setModal2_1} modal2={modal2} setModal2={setModal2} show2={show2} setShow2={setShow2} preTodos={lPHI} setPreTodos={setLPHI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
            <div className='box4'>重要度 低 / 優先度 低
              <Button setShow={setShow} ListBoxPlace={"LPLI"} setListBoxPlace={setListBoxPlace} />
              <TaskBox setModal2_1={setModal2_1} modal2={modal2} setModal2={setModal2} show2={show2} setShow2={setShow2} preTodos={lPLI} setPreTodos={setLPLI} eight={eight} setEight={setEight} nine={nine} setNine={setNine} ten={ten} setTen={setTen} eleven={eleven} setEleven={setEleven} twelve={twelve} setTwelve={setTwelve} thirteen={thirteen} setThirteen={setThirteen} fourteen={fourteen} setFourteen={setFourteen} fifteen={fifteen} setFifteen={setFifteen} sixteen={sixteen} setSixteen={setSixteen} seventeen={seventeen} setSeventeen={setSeventeen} />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
type finaltime  = {
  id:number;
  starttime: string;
  deadtime: string
  time:number;
  }
