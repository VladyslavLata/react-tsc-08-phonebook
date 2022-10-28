import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: string;
      green: string;
      black: string;
      white: string;
      gray: string;
      text: string;
      bgWhite: string;
      bgPrimary: string;
      bgSecondary: string;
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
    };
    space: number[];
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      bold: number;
    };
    lineHeights: {
      body:number;
      heading: number;
    };
    borders: {
      none: string;
      s: string;
      m: string;
      l:string;
    };
    radii: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      round: string;
    };
  }
}
