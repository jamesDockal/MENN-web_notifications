import React, { ButtonHTMLAttributes } from "react";

import { ButtonComponent } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  kind: "create" | "share" | "notification";
}

export const Button: React.FC<Props> = ({ title, kind, ...buttonProps }) => {
  return (
    <ButtonComponent {...buttonProps} kind={kind}>
      {title}
    </ButtonComponent>
  );
};
