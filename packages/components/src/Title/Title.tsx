import * as React from "react";

import { h1, h2, h3, h4, h5, h6 } from "./TitleStyled";

type TitleProps = {
  children: React.ReactText;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title = ({ children, type }: TitleProps ) => {
  const classStyled = (
    type === "h1" && h1() || type === "h2" && h2() || type === "h3" && h3() || type === "h4" && h4() || type === "h5" && h5() || type === "h6" && h6()
  );

  return React.createElement(
    type,
    { className: classStyled },
    children,
  );
}

export default Title;
