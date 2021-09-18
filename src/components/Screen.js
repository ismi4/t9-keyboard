import { TextField } from "@mui/material";

function Screen(props) {
  return (
    <TextField
      className="screen"
      id="outlined-basic"
      variant="outlined"
      size="small"
      sx={{ width: 0.9, outlineColor: "#3e2723" }}
      value={props.screenOutput}
      inputProps={{
        onKeyDown: (event) => {
          event.preventDefault();
        },
      }}
    />
  );
}

export default Screen;
