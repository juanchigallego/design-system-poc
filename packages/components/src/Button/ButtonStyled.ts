import { styled } from '@stitches/react';
import { color } from "../../../tokens/build/js/tokens";

export const StyledButton = styled("button", {
  alignItems: "center",
  appearance: "none",
  backgroundColor: "transparent",
  borderRadius: "8px",
  cursor: "pointer",
  display: "inline-flex",
  padding: "8px 16px",
  textAlign: "center",
  transition: "0.5s ease",
  verticalAlign: "middle",

  variants: {
    appearance: {
      default: {
        backgroundColor: color.neutral.nubeWhite.value,
        border: "1px solid #ecebec",
        color: "#0272d5",

        "&:hover": {
          backgroundColor: "black",
          borderColor: "black",
        }
      },

      primary: {
        backgroundColor: color.primary.pure.value,
        border: "1px solid blue",
        color: "white",

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      },

      secondary: {
        backgroundColor: "blue",
        border: "1px solid blue",
        color: "white",

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      },

      danger: {
        backgroundColor: "blue",
        border: "1px solid blue",
        color: "white",

        "&:hover": {
          backgroundColor: "dark blue",
          borderColor: "dark blue",
        }
      }
    }
  }
});
