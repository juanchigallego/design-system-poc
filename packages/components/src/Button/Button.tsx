import * as React from "react";

import { ButtonStyled } from "./ButtonStyled";

import { Text } from "../";

type Props = {
  appearance?: "default" | "primary" | "secondary" | "danger";
  children: React.ReactText;
  onClick: () => void;
}

const Button = ({ appearance= "default", children, onClick }: Props ) => {
  const textAppearance = (
    appearance === "default" && "secondary" || "light"
  )
  return (
    <ButtonStyled appearance={appearance} type="button" onClick={onClick}>
      <Text bold lineHeight="base" appearance={textAppearance}>{children}</Text>
    </ButtonStyled>
  )
} 

export default Button;
