import * as React from "react";

import { StackItemStyled } from "./StackStyled";

type StackItemProps = {
  children: React.ReactNode;
  fill?: boolean;
}

const StackItem = ({ children, fill= false }: StackItemProps) => {
  return (
    <StackItemStyled fill={fill}>
      {children}
    </StackItemStyled>
  )
};

export default StackItem;
