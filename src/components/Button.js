import { Button as ButtonMaterial } from "@mui/material";

import "../styles/Button.css";

import { useState, useEffect } from "react";

function Button(props) {
  const [counter, setCounter] = useState(0);

  const setTimer = () => {
    setTimeout(() => {
      setCounter(0);
    }, 2000);
  };

  const addCharacterToScreenOutput = (index) => {
    props.setScreenOutput((prevState) => prevState + props.children[index]);
  };

  const removeLastCharacterFromScreenOutput = () => {
    props.setScreenOutput((prevState) => prevState.slice(0, -1));
  };

  const addRightSidedCharacterToScreenOutputInsteadOfLast = (index) => {
    props.setScreenOutput(
      (prevState) =>
        prevState.slice(0, -1) + props.children.split(" | ")[1].split("")[index]
    );
  };

  useEffect(() => {
    if (counter > 0) {
      if (props.children.length === 1) {
        addCharacterToScreenOutput(0);
        setCounter(0);
      } else if (props.children.length === 5) {
        if (counter === 1) {
          addCharacterToScreenOutput(0);
          setTimer();
        }

        if (counter === 2)
          props.setScreenOutput((prevState) =>
            props.children.split(" | ")[1].split("")[0] === "_"
              ? prevState.slice(0, -1) + " "
              : prevState.slice(0, -1) +
                props.children.split(" | ")[1].split("")[0]
          );

        if (counter === 3) {
          removeLastCharacterFromScreenOutput();
          setCounter(0);
        }
      } else if (props.children.length === 7) {
        if (counter === 1) {
          addCharacterToScreenOutput(0);
          setTimer();
        }

        if (counter === 2) addRightSidedCharacterToScreenOutputInsteadOfLast(0);

        if (counter === 3) addRightSidedCharacterToScreenOutputInsteadOfLast(1);

        if (counter === 4) addRightSidedCharacterToScreenOutputInsteadOfLast(2);

        if (counter === 5) {
          removeLastCharacterFromScreenOutput();
          setCounter(0);
        }
      } else if (props.children.length === 8) {
        if (counter === 1) {
          addCharacterToScreenOutput(0);
          setTimer();
        }

        if (counter === 2) addRightSidedCharacterToScreenOutputInsteadOfLast(0);

        if (counter === 3) addRightSidedCharacterToScreenOutputInsteadOfLast(1);

        if (counter === 4) addRightSidedCharacterToScreenOutputInsteadOfLast(2);

        if (counter === 5) addRightSidedCharacterToScreenOutputInsteadOfLast(3);

        if (counter === 6) {
          removeLastCharacterFromScreenOutput();
          setCounter(0);
        }
      }
    }
  }, [counter]);

  return (
    <ButtonMaterial
      onClick={() => {
        setCounter(counter + 1);
      }}
      color="button"
      sx={{ width: 0.6 }}
      className="button"
      variant="contained"
    >
      {props.children}
    </ButtonMaterial>
  );
}

export default Button;
