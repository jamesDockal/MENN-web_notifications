import React, { InputHTMLAttributes } from "react";

import { InputComponent } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input: React.FC<Props> = ({ ...inputProps }) => {
  return <InputComponent {...inputProps} />;
};
