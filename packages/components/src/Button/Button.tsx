import * as React from "react";
import { ButtonStyled } from "./ButtonStyled";

type Props = {
  appearance?: "default" | "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ appearance= "default", children, onClick }: Props ) => {
  return (
    <ButtonStyled appearance={appearance} type="button" onClick={onClick}>{children}</ButtonStyled>
  )
} 

export default Button;
