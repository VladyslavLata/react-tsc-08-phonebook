import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import { Button } from './Button';
import { screen, render } from '@testing-library/react';
import  userEvent  from "@testing-library/user-event";

describe('Button element', () => {

  it('button is displayed and called function', () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>Click me</Button>
      </ThemeProvider>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(onClick).toBeCalledTimes(1);
  });

  it('button is focusing', () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>Click me</Button>
      </ThemeProvider>
    );
    const btn = screen.getByRole("button");
    userEvent.tab();
    expect(btn).toHaveFocus();
  });
});
