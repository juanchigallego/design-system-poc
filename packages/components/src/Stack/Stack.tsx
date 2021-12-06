import * as React from "react";

import { StackStyled } from "./StackStyled";

type StackProps = {
  children: React.ReactNode;
  spacing?: "base" | "tight" | "loose" | "zero";
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

export default Stack;
