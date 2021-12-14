import { css } from '@stitches/react';
import tokens from "@juanchigallego/tokens";

const BaseTitleStyled = css({
  color: tokens.color.secondary.pure.value,
  display: "block",
  fontFamily: tokens.font.family.value,
  fontWeight: tokens.font.weight.bold.value,
  lineHeight: tokens.font.lineHeight.heading.value,
  margin: 0,
  padding: 0,
})

export const h1 = css(BaseTitleStyled, {
  fontSize: tokens.font.size.headline.pageTitle.value
});

export const h2 = css(BaseTitleStyled, {
  fontSize: tokens.font.size.headline.pageSubtitle.value
});

export const h3 = css(BaseTitleStyled, {
  fontSize: tokens.font.size.headline.elementTitle.value
});

export const h4 = css(BaseTitleStyled, {
  fontSize: tokens.font.size.body.base.value
});

export const h5 = css(BaseTitleStyled, {
  fontSize: tokens.font.size.body.caption.value
});

export const h6 = css(BaseTitleStyled, {
  fontSize: tokens.font.size.body.caption.value
});
