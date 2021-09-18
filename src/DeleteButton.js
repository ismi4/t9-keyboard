import { Button as ButtonMaterial } from "@mui/material";

function DeleteButton(props) {
  return (
    <ButtonMaterial
      onClick={() => {
        props.setScreenOutput((prevState) => prevState.slice(0, -1));
      }}
      color="buttonDelete"
      sx={{ width: 0.6, marginTop: 3 }}
      className="button"
      variant="contained"
    >
      DELETE
    </ButtonMaterial>
  );
}

export default DeleteButton;
