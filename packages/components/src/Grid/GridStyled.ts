import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  }
});

export const { styled, css } = createStitches({
  media: {
    md: '(min-width: 672px)',
    lg: '(min-width: 1024px)',
  },

  utils: {
    flexWidth: (value: number) => ({
      flexBasis: ((value / 6) * 100) + "%",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: ((value / 6) * 100) + "%"
    })
  }
});

export const ColumnStyled = styled("div", {
  flexBasis: 0,
  flexGrow: 1,
  maxWidth: "100%",
  width: "100%",
});

export const RowStyled = styled("div", {
  display: "flex",
  flexWrap: "wrap",
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
        rowGap: 16,

        [`& ${RowStyled}`]: {
          marginLeft: -8,
          marginRight: -8,
          rowGap: 16,
        },

        [`& ${ColumnStyled}`]: {
          paddingLeft: 8,
          paddingRight: 8
        }
      },

      tight: {
        rowGap: 8,

        [`& ${RowStyled}`]: {
          marginLeft: -4,
          marginRight: -4,
          rowGap: 8
        },

        [`& ${ColumnStyled}`]: {
          paddingLeft: 4,
          paddingRight: 4
        }
      },

      loose: {
        rowGap: 24,

        [`& ${RowStyled}`]: {
          marginLeft: -12,
          marginRight: -12,
          rowGap: 24
        },

        [`& ${ColumnStyled}`]: {
          paddingLeft: 12,
          paddingRight: 12
        }
      },

      none: {
        padding: 0,
        rowGap: 0,

        [`& ${RowStyled}`]: {
          margin: 0,
          rowGap: 0
        },

        [`& ${ColumnStyled}`]: {
          padding: 0
        }
      }
    }
  }
});
