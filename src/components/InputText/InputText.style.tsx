import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const InputTextStyled = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fab2bc",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fab2bc",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1f2636",
    },
    "&:hover fieldset": {
      borderColor: "#fab2bc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fab2bc",
    },
  },
});

export default InputTextStyled;
