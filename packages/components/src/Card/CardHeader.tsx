import * as React from "react";

import { CardHeaderStyled } from "./CardStyled";

export interface CardHeaderProps {
  title?: React.ReactText;
  children?: React.ReactNode;
}

const CardHeader = ({ title, children }: CardHeaderProps) => {
  return (
    <CardHeaderStyled>
      <h3>{title}</h3>
      {children}
    </CardHeaderStyled>
  )
};

export default CardHeader;
