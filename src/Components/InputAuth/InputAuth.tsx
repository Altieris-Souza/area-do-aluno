import React from "react";
import { StyledInput } from "./style";

interface InputTextProps {
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const InputAuth: React.FC<InputTextProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <StyledInput
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="inputText"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputAuth;
