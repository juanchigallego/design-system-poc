import { styled } from '@stitches/react';
import { color } from "../../../tokens/build/js/tokens";

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
        backgroundColor: color.neutral.nubeWhite.value,
        borderColor: color.neutral.nubeWhite.value,
        color: color.secondary.pure.value,

        "&:hover": {
          backgroundColor: "black",
          borderColor: "black",
        }
      },

      primary: {
        backgroundColor: color.primary.pure.value,
        borderColor: color.primary.pure.value,
        color: color.neutral.pureWhite.value,

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      },

      secondary: {
        backgroundColor: color.secondary.pure.value,
        borderColor: color.secondary.pure.value,
        color: color.neutral.pureWhite.value,

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      },

      danger: {
        backgroundColor: color.danger.pure.value,
        borderColor: color.danger.pure.value,
        color: color.neutral.pureWhite.value,

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      }
    }
  }
});
