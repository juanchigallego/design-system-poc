import * as React from "react";

import { StackStyled } from "./StackStyled";

import StackItem from "./StackItem";

type StackProps = {
  children: React.ReactNode;
  spacing?: "base" | "tight" | "loose" | "none";
  mode?: "horizontal" | "vertical";
  wrap?: boolean;
}

const Stack = ({ children, spacing= "base", mode= "horizontal", wrap= false }: StackProps) => {
  return (
    <StackStyled spacing={spacing} mode={mode} wrap={wrap}>
      {children}
    </StackStyled>
  )
};

Stack.Item = StackItem;

export default Stack;
