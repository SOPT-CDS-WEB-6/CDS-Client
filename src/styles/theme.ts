import { css, DefaultTheme } from 'styled-components';

const colors = {
  red: '#ED3124',
  red2: '#FF4A57',
  cgv_gradient: 'linear-gradient(93.78deg, #ED3124 -11.31%, #FE7156 73.6%)',
  black: '#000000',
  gray90: '#323232',
  gray70: '#737373',
  gray40: '#AAAAAA',
  gray20: '#E3E3E3',
  gray10: '#F6F6F6',
  white: '#FFFFFF',
};

interface Font {
  size: number;
}

function FONT({ size }: Font) {
  return css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: ${size}rem;
    letter-spacing: 0.1rem;
  `;
}

const fonts = {
  Heading: FONT({ size: 6 }),
  Title: FONT({ size: 3.2 }),
  Body1: FONT({ size: 2.4 }),
  Body2: FONT({ size: 2.0 }),
  Body3: FONT({ size: 1.8 }),
  Body4: FONT({ size: 1.6 }),
  Body5: FONT({ size: 1.4 }),
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
