import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { Filter } from './Filter';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';

const onChange = jest.fn();

describe('Filter component', () => {
  it('find Filter component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Filter value="" onChange={onChange} />
      </ThemeProvider>
    );
    expect(
      screen.getByRole("textbox")
    ).toBeInTheDocument();
  }); 

   it('Filter find placeholder', () => {
    render(
      <ThemeProvider theme={theme}>
        <Filter value="" onChange={onChange} />
      </ThemeProvider>
    );
    expect(
      screen.getByPlaceholderText(/find contacts by name/i)
    ).toBeInTheDocument();
   });
  
   it('Filter placeholder hiden and work onChange', () => {
    render(
      <ThemeProvider theme={theme}>
        <Filter value="" onChange={onChange} />
      </ThemeProvider>
     );
     userEvent.type(screen.getByRole("textbox"), "Hello");
     expect(onChange).toBeCalledTimes(5);
    expect(
      screen.queryByPlaceholderText(/find contacts by name/i)
     ).not.toBeDisabled();
  });
});
