import * as React from "react";
import { StyledButton } from "./ButtonStyled";

type Props = {
  appearance?: "default" | "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ appearance= "default", children, onClick }: Props ) => {
  return (
    <StyledButton appearance={appearance} type="button" onClick={onClick}>{children}</StyledButton>
  )
} 

export default Button;
