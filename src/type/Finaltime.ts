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