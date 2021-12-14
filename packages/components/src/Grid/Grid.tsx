import * as React from "react";

import { GridStyled, globalStyles } from "./GridStyled";

import Row from "./Row";
import Column from "./Column";

type GridProps = {
  children: React.ReactNode;
  fluid?: boolean;
  spacing?: "base" | "tight" | "loose" | "none";
}

const Grid = ({ children, fluid= false, spacing= "base" }: GridProps) => {
  globalStyles();
  
  return (
    <GridStyled spacing={spacing} fluid={fluid}>
      {children}
    </GridStyled>
  )
};

Grid.Row = Row;
Grid.Column = Column;

export default Grid;
