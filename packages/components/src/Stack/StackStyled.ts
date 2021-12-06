import { styled } from '@stitches/react';

export const StackStyled = styled("div", {
  display: "flex",

  variants: {
    mode: {
      vertical: {
        flexDirection: "column"
      },

      horizontal: {
        flexDirection: "row"
      }
    },

    wrap: {
      true: {
        flexWrap: "wrap"
      }
    },

    spacing: {
      base: {
        gap: "16px"
      },
      
      tight: {
        gap: "8px"
      },
      
      loose: {
        gap: "24px"
      }
    }
  }
});
