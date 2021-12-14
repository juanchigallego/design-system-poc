import * as React from "react";

import { RowStyled } from "./GridStyled";

type RowProps = {
  children: React.ReactNode;
}

const Row = ({ children }: RowProps) => {
  return (
    <RowStyled>
      {children}
    </RowStyled>
  )
};

export default Row;
