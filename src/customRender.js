import React from "react";
import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

afterAll(() => jest.clearAllMocks());

const AllTheProviders = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export * from "@testing-library/jest-dom";

export { customRender as render };
