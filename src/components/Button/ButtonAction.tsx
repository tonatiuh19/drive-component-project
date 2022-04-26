import React from "react";
import ButtonActionStyled from "./ButtonAction.style";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CalculateIcon from "@mui/icons-material/Calculate";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const ButtonAction = ({ text = "Button", icon = "", handleClick }: any) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "NEXT":
        return <DoubleArrowIcon />;
      case "CALCULATE":
        return <CalculateIcon />;
      case "RESET":
        return <RestartAltIcon />;
      default:
        return null;
    }
  };

  return (
    <ButtonActionStyled
      variant="contained"
      endIcon={getIcon(icon)}
      onClick={handleClick}
      fullWidth
    >
      {text}
    </ButtonActionStyled>
  );
};

export default ButtonAction;
