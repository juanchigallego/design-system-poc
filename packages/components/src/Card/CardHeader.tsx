import * as React from "react";

import { CardHeaderStyled } from "./CardStyled";

import { Title } from "../";

export interface CardHeaderProps {
  title?: React.ReactText;
  children?: React.ReactNode;
}

const CardHeader = ({ title, children }: CardHeaderProps) => {
  return (
    <CardHeaderStyled>
      <Title type="h3">{title}</Title>
      {children}
    </CardHeaderStyled>
  )
};

export default CardHeader;
