import { styled } from '@stitches/react';
import tokens from "../../../tokens";

export const ButtonStyled = styled("button", {
  alignItems: "center",
  appearance: "none",
  backgroundColor: "transparent",
  borderRadius: "8px",
  borderStyle: "solid",
  borderWidth: "1px",
  cursor: "pointer",
  display: "inline-flex",
  padding: "10px 16px",
  textAlign: "center",
  transition: "0.5s ease",
  verticalAlign: "middle",
  whiteSpace: "nowrap",

  variants: {
    appearance: {
      default: {
        backgroundColor: tokens.color.neutral.nubeWhite.value,
        borderColor: tokens.color.neutral.nubeWhite.value,
        color: tokens.color.secondary.pure.value,

        "&:hover": {
          backgroundColor: "black",
          borderColor: "black",
        }
      },

      primary: {
        backgroundColor: tokens.color.primary.pure.value,
        borderColor: tokens.color.primary.pure.value,
        color: tokens.color.neutral.pureWhite.value,

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      },

      secondary: {
        backgroundColor: tokens.color.secondary.pure.value,
        borderColor: tokens.color.secondary.pure.value,
        color: tokens.color.neutral.pureWhite.value,

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      },

      danger: {
        backgroundColor: tokens.color.danger.pure.value,
        borderColor: tokens.color.danger.pure.value,
        color: tokens.color.neutral.pureWhite.value,

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      }
    }
  }
});
