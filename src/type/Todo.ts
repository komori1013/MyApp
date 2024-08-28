export class Todo {
  id: number;
  text: string;
  place: string;
  constructor(id: number, text: string, place: string) {
    this.id = id;
    this.text = text;
    this.place = place;
  }
};