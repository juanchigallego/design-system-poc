import * as React from "react";

import { TextStyled } from "./TextStyled";

type TextProps = {
  children: React.ReactText;
  size?: "caption" | "base";
  bold?: boolean;
  underline?: boolean;
  block?: boolean;
  appearance?: "primary" | "secondary" | "danger" | "warning" | "success" | "default" | "light";
  lineHeight?: "base" | "heading" | "body";
}

const Text = ({ children, size= "base", bold= false, underline= false, block= false, appearance= "default", lineHeight= "base" }: TextProps) => {
  return (
    <TextStyled size={size} bold={bold} underline={underline} block={block} appearance={appearance} lineHeight={lineHeight}>
      {children}
    </TextStyled>
  );
}

export default Text;
