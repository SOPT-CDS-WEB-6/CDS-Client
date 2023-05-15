import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string;
      red2: string;
      black: string;
      gray90: string;
      gray70: string;
      gray40: string;
      gray20: string;
      white: string;
    };
    fonts: {
      Heading: SerializedStyles;
      Title: SerializedStyles;
      Body1: SerializedStyles;
      Body2: SerializedStyles;
      Body3: SerializedStyles;
      Body4: SerializedStyles;
      Body5: SerializedStyles;
    };
  }
}