import { styled } from '@stitches/react';
import { color, font } from "../../../tokens/build/js/tokens";

export const TextStyled = styled("p", {
  display: "inline-block",
  fontFamily: font.family.value,
  fontWeight: font.weight.regular.value,
  margin: 0,
  padding: 0,
  textAlign: "left",

  variants: {
    size: {
      caption: {
        fontSize: font.size.body.caption.value
      },

      base: {
        fontSize: font.size.body.base.value
      }
    },

    lineHeight: {
      base: {
        lineHeight: font.lineHeight.base.value
      },

      heading: {
        lineHeight: font.lineHeight.heading.value
      },

      body: {
        lineHeight: font.lineHeight.body.value
      }
    },

    bold: {
      true: {
        fontWeight: font.weight.bold.value
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
        color: color.neutral.default.value
      },

      primary: {
        color: color.primary.pure.value
      },

      secondary: {
        color: color.secondary.pure.value
      },

      danger: {
        color: color.danger.pure.value
      },

      warning: {
        color: color.warning.pure.value
      },

      success: {
        color: color.success.pure.value
      },

      light: {
        color: color.neutral.pureWhite.value
      }
    }
  }
});
