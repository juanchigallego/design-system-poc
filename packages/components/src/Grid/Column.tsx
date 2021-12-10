import * as React from "react";

import { ColumnStyled } from "./GridStyled";

type ColumnProps = {
  children: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
}

const Column = ({ children, sm, md, lg }: ColumnProps) => {
  const cssStyles = {
    ...sm && {flexWidth: sm},
    ...md && {"@md": {flexWidth: md}},
    ...lg && {"@lg": {flexWidth: lg}}
  }
  return (
    <ColumnStyled css={cssStyles}>
      {children}
    </ColumnStyled>
  )
};

export default Column;
