import Button from "./Button";
import "./styles/Keypad.css";

function Keypad(props) {
  return (
    <div className="keypad">
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        1
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        2 | ABC
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        3 | DEF
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        4 | GHI
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        5 | JKL
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        6 | MNO
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        7 | PQRS
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        8 | TUV
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        9 | WXYZ
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        * | +
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        0 | _
      </Button>
      <Button
        screenOutput={props.screenOutput}
        setScreenOutput={props.setScreenOutput}
      >
        #
      </Button>
    </div>
  );
}

export default Keypad;
