import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  media: {
    md: '(min-width: 672px)',
    lg: '(min-width: 1024px)',
  },

  utils: {
    flexWidth: (value) => ({
      flexBasis: ((value / 6) * 100) + "%",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: ((value / 6) * 100) + "%"
    })
  }
});

export const GridStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",

  variants: {
    fluid: {
      false: {
        maxWidth: (1200 / 16 + "rem")
      }
    },

    spacing: {
      base: {
        rowGap: 16
      },

      tight: {
        rowGap: 8
      },

      loose: {
        rowGap: 24
      },

      none: {
        rowGap: 0
      }
    }
  }
});

export const RowStyled = styled("div", {
  display: "flex",
  flexWrap: "wrap",

  variants: {
    spacing: {
      base: {
        gap: 16
      },

      tight: {
        gap: 8
      },

      loose: {
        gap: 24
      },

      none: {
        gap: 0
      }
    }
  }
});

export const ColumnStyled = styled("div", {
  flexBasis: 0,
  flexGrow: 1,
  maxWidth: "100%",
  width: "100%",
});
