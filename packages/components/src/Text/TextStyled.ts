import { styled } from '@stitches/react';
import tokens from "@juanchigallego/tokens";

export const TextStyled = styled("p", {
  display: "inline-block",
  fontFamily: tokens.font.family.value,
  fontWeight: tokens.font.weight.regular.value,
  margin: 0,
  padding: 0,
  textAlign: "left",

  variants: {
    size: {
      caption: {
        fontSize: tokens.font.size.body.caption.value
      },

      base: {
        fontSize: tokens.font.size.body.base.value
      }
    },

    lineHeight: {
      base: {
        lineHeight: tokens.font.lineHeight.base.value
      },

      heading: {
        lineHeight: tokens.font.lineHeight.heading.value
      },

      body: {
        lineHeight: tokens.font.lineHeight.body.value
      }
    },

    bold: {
      true: {
        fontWeight: tokens.font.weight.bold.value
      }
    },

    underline: {
      true: {
        textDecoration: "underline"
      }
    },

    block: {
      true: {
        display: "block"
      }
    },

    appearance: {
      default: {
        color: tokens.color.neutral.default.value
      },

      primary: {
        color: tokens.color.primary.pure.value
      },

      secondary: {
        color: tokens.color.secondary.pure.value
      },

      danger: {
        color: tokens.color.danger.pure.value
      },

      warning: {
        color: tokens.color.warning.pure.value
      },

      success: {
        color: tokens.color.success.pure.value
      },

      light: {
        color: tokens.color.neutral.pureWhite.value
      }
    }
  }
});
