import * as React from "react";

import { CardFooterStyled } from "./CardStyled";

export interface CardFooterProps {
  children: React.ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => {
  return (
    <CardFooterStyled>{children}</CardFooterStyled>
  )
};

export default CardFooter;
