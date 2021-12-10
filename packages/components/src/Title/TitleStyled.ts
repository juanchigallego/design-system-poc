import { css } from '@stitches/react';
import { color, font } from "../../../tokens/build/js/tokens";

const BaseTitleStyled = css({
  color: color.secondary.pure.value,
  display: "block",
  fontFamily: font.family.value,
  fontWeight: font.weight.bold.value,
  lineHeight: font.lineHeight.heading.value,
  margin: 0,
  padding: 0,
})

export const h1 = css(BaseTitleStyled, {
  fontSize: font.size.headline.pageTitle.value
});

export const h2 = css(BaseTitleStyled, {
  fontSize: font.size.headline.pageSubtitle.value
});

export const h3 = css(BaseTitleStyled, {
  fontSize: font.size.headline.elementTitle.value
});

export const h4 = css(BaseTitleStyled, {
  fontSize: font.size.body.base.value
});

export const h5 = css(BaseTitleStyled, {
  fontSize: font.size.body.caption.value
});

export const h6 = css(BaseTitleStyled, {
  fontSize: font.size.body.caption.value
});
