import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";

describe("Tests for Header component", () => {
  beforeEach(() => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  });
  it("should render Header component with a login button", () => {
    const loginBtn = screen.getByRole("button", { name: "login" });
    expect(loginBtn).toBeInTheDocument();
  });

  it("should render Header component with a cart - 0 items", () => {
    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
  });

  it("should render logout when login button is clicked", () => {
    const loginBtn = screen.getByRole("button", { name: "login" });
    expect(loginBtn).toBeInTheDocument();
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", { name: "logout" });
    expect(logoutBtn).toBeInTheDocument();
  });
});
