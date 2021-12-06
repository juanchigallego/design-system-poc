import * as React from "react";

import { CardStyled } from "./CardStyled";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

type CardProps = {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <CardStyled>
      {children}
    </CardStyled>
  )
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
