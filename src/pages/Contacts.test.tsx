import { Provider } from "react-redux";
import { store } from "../redux/store";
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from "../constants/theme";
import  ContactsPage  from "./Contacts";
import { screen, render } from "@testing-library/react";
import React from "react";

jest.mock("axios");


describe("Contacts page render", () => {
  it("contacts", async () => {
 render(<ThemeProvider theme={theme}>
      <Provider store={store}><ContactsPage /></Provider>
    </ThemeProvider>);
   
    expect(await screen.findByText("Contacts")).toBeInTheDocument();
  })
})