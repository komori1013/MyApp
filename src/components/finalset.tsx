import { Button } from "./Button";
import { HOUR_LIST } from "../type/Time_hour";
import { Finaltime } from "../type/Finaltime";
import { Todo } from "../type/Todo";
import { Area } from "../type/Area";
import React,{useEffect, useRef} from "react";

interface FinalsetProps {
  finalData: Finaltime[]; // `finalData`は`Finaltime`オブジェクトの配列であるべきです
  setFinalData:Function;
  modal2: string;
  hPHI: Todo[];
  setHPHI: Function;
  lPHI: Todo[];
  setLPHI: Function;
  hPLI: Todo[];
  setHPLI: Function;
  lPLI: Todo[];
  setLPLI: Function;
}

export const Finalset = ({ finalData, setFinalData, modal2, hPHI ,setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI}: FinalsetProps) => {

  return (
    <ul className="time">
      {HOUR_LIST.map((hour, index) => {
        console.log(hour);
        // Check if the current hour is within any of the time ranges in `finalData`
        const isInAnyRange = Object.values(finalData).some(final => {
          console.log(final.starttime);
          console.log(final.deadtime);
          return hour >= final.starttime && hour <= final.deadtime;
        });

        const matchedFinal = Object.values(finalData).find(final => hour === final.starttime);
   
        return (
          <li
            className="last"
            key={index} // Use `index` as the key
            style={{
              background: isInAnyRange ? '#65aee9' : 'transparent',
              color: isInAnyRange ? 'white' : 'transparent',

            }}
          >

          {matchedFinal ? matchedFinal.data + " ": null}
          {matchedFinal ? matchedFinal.time + "分" : null}
          {matchedFinal ? <button　onClick={()=>handleClick(finalData,setFinalData,matchedFinal.id,matchedFinal.starttime,matchedFinal.deadtime,matchedFinal.place,matchedFinal.data,hPHI ,setHPHI, lPHI, setLPHI, hPLI, setHPLI, lPLI, setLPLI)}>戻す</button>: null}

          </li>
        );
      })}
    </ul>
  );
};

const handleClick=(finalData:Finaltime[],setFinalData:Function, index:number, starttime:number,deadtime:number,place:string, data:string,hPHI: Todo[],setHPHI: Function,lPHI: Todo[],setLPHI: Function,hPLI: Todo[],setHPLI: Function,lPLI: Todo[],setLPLI: Function)=>{

setFinalData(({[index]: {},...finalData }) => {
setFinalData({...finalData});
 })

  if (place === Area.HPHIPlACE) {
    const id: number = new Date().getTime();
    const newhPHI: Todo = {
      id: new Date().getTime(),
      text: data,
      place: "HPHI",
    }
    setHPHI({ [id]: newhPHI, ...hPHI });
  }
  else if (place === Area.LPHIPlACE) {
    const id: number = new Date().getTime();
    const newlPHI: Todo = {
      id: new Date().getTime(),
      text: data,
      place: "LPHI",
    }
    setLPHI({ [id]: newlPHI, ...lPHI });
  }
  else if (place === Area.HPLIPlACE) {
    const id: number = new Date().getTime();
    const newhPLI: Todo = {
      id: new Date().getTime(),
      text: data,
      place: "HPLI",
    }
    setHPLI({ [id]: newhPLI, ...hPLI });
  }
  else if (place === Area.LPLIPlACE) {
    const id: number = new Date().getTime();
    const newlPLI: Todo = {
      id: new Date().getTime(),
      text: data,
      place: "LPLI",
    }
    setLPLI({ [id]: newlPLI, ...lPLI });
  }
};