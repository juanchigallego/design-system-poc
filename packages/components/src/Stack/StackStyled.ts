import { styled } from '@stitches/react';

export const StackStyled = styled("div", {
  display: "flex",

  variants: {
    spacing: {
      base: {
        gap: "16px"
      },
      
      tight: {
        gap: "8px"
      },
      
      loose: {
        gap: "24px"
      },

      none: {
        gap: 0
      }
    },

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
    }
  }
});

export const StackItemStyled = styled("div", {
  flex: "0 0 auto",
  minWidth: 0,

  variants: {
    fill: {
      true: {
        flex: "1 1 auto"
      }
    }
  }
});
