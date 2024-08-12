export class Todo {
  id: number;
  text: string;
  deadLine: string;
  constructor(id: number, text: string, deadLine: string) {
    this.id = id;
    this.text = text;
    this.deadLine = deadLine;
  }
};