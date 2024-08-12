import { Todo } from "./Todo";

export type HandleSubmitProps = {
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
  deadLine: string;
  setDeadLine: Function;
};