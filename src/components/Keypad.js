import Button from "./Button";
import "../styles/Keypad.css";

function Keypad(props) {
  //must be in form "a" or "a | b", where b is string of max length 4
  let buttonTexts = [
    "1",
    "2 | ABC",
    "3 | DEF",
    "4 | GHI",
    "5 | JKL",
    "6 | MNO",
    "7 | PQRS",
    "8 | TUV",
    "9 | WXYZ",
    "* | +",
    "0 | _",
    "#",
  ];
  return (
    <div className="keypad">
      {buttonTexts.map((el) => (
        <Button setScreenOutput={props.setScreenOutput}>{el}</Button>
      ))}
    </div>
  );
}

export default Keypad;
