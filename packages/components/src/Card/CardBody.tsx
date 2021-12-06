import * as React from "react";

import { CardBodyStyled } from "./CardStyled";

export interface CardBodyProps {
  children: React.ReactNode;
}

const CardBody = ({ children }: CardBodyProps) => {
  return (
    <CardBodyStyled>{children}</CardBodyStyled>
  )
};

export default CardBody;
