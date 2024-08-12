import { ButtonProps } from "../type/ButtonProps";

export function Button({ setShow, ListBoxPlace, setListBoxPlace }: ButtonProps) {
  return (
    <button className='button' onClick={() => { setShow(true); setListBoxPlace(ListBoxPlace) }}>+</button>
  )
};