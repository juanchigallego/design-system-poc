import * as React from "react";

import { RowStyled } from "./GridStyled";

type RowProps = {
  children: React.ReactNode;
  spacing?: "base" | "tight" | "loose" | "none";
}

const Row = ({ children, spacing= "base" }: RowProps) => {
  return (
    <RowStyled spacing={spacing}>
      {children}
    </RowStyled>
  )
};

export default Row;
