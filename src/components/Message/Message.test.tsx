import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from "../../constants/theme";
import { Message } from './Message';
import { screen, render } from '@testing-library/react';
import React from 'react';


describe("Message element", () => {
  it("Message is displayed", () => {
    render(<ThemeProvider theme={theme}><Message message={"Hello world!"} /></ThemeProvider>);
    expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
  })
})