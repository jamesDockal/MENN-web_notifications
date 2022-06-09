import React, { ButtonHTMLAttributes } from "react";

import { ButtonComponent } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button: React.FC<Props> = ({ title, ...buttonProps }) => {
  return <ButtonComponent {...buttonProps}>{title}</ButtonComponent>;
};
