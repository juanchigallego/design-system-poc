import { styled } from '@stitches/react';
import { color } from "../../../tokens/build/js/tokens";

export const CardStyled = styled("div", {
  border: `1px solid ${color.neutral.nubeWhite.value}`,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  padding: "8px 16px",
});

export const CardHeaderStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  padding: "8px 0",
});

export const CardBodyStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "8px 0",
  rowGap: "16px",
});

export const CardFooterStyled = styled("div", {
  alignItems: "center",
  columnGap: "8px",
  display: "flex",
  justifyContent: "flex-end",
  padding: "8px 0",
});
