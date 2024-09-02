import { ButtonProps } from "../type/ButtonProps";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export function Button({ setShow, ListBoxPlace, setListBoxPlace }: ButtonProps) {
  return (
    <button className="button" onClick={() => { setShow(true); setListBoxPlace(ListBoxPlace) }}>
      +
    </button>
  )
};