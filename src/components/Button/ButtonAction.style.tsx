import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonActionStyled = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#fab2bc",
  borderColor: "#fab2bc",
  color: "#1f2636",
  "&:hover": {
    backgroundColor: "#fccad1",
    borderColor: "#fab2bc",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "#fccad1",
    borderColor: "#fab2bc",
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(255,173,185,.5)",
  },
});

export default ButtonActionStyled;
