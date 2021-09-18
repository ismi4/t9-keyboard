import DeleteButton from "./components/DeleteButton";
import Keypad from "./components/Keypad";
import Screen from "./components/Screen";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

import { useState } from "react";

const theme = createTheme({
  palette: {
    button: {
      main: "#3e2723",
      contrastText: "#fff",
    },
    buttonDelete: {
      main: "#212121",
      contrastText: "#fff",
    },
  },
});

function App() {
  const [screenOutput, setScreenOutput] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          marginTop: "10%",
          width: "40%",
        }}
      >
        <Screen screenOutput={screenOutput} />
        <Keypad screenOutput={screenOutput} setScreenOutput={setScreenOutput} />
        <DeleteButton setScreenOutput={setScreenOutput} />
      </div>
    </ThemeProvider>
  );
}

export default App;
