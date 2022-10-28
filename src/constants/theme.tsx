import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    red: '#ff0000',
    green: '#00ff7f',
    black: '#000',
    white: '#fff',
    gray: '#929292',
    text: '#2a2a2a',
    bgWhite: '#fff',
    bgPrimary: '#ffebcd',
    bgSecondary: '#deb887',
    primary: '#07c',
    secondary: '#05a',
    accent: '#c71585',
    muted: '#f6f6f6',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    medium:500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    s: '1px solid',
    m: '3px solid',
    l: '5px solid',
  },
  radii: {
    none: '0',
    sm: '3px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
};
