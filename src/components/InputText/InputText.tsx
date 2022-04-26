import React from "react";
import InputTextStyled from "./InputText.style";

const InputText = ({
  label = "Input",
  error = false,
  helperError = "",
  type = "text",
  value = "",
  handleChange,
}: any) => {
  return (
    <InputTextStyled
      error={error}
      label={label}
      id="custom-css-outlined-input"
      helperText={error && helperError}
      type={type}
      value={value}
      onChange={handleChange}
      fullWidth
    />
  );
};

export default InputText;
