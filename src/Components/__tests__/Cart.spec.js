import "@testing-library/jest-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/RestaurantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router";

describe("tests to check the cart flow", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

  it("should render RestaurantMenu component", async () => {
    await act(async () => render(<RestaurantMenu />));
    const category = screen.getByText("Value Biryani Bowl- 500ml (17)");
    expect(category).toBeInTheDocument();
  });

  it("should display list of food items on clicking one category", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );
    const category = screen.getByText("Value Biryani Bowl- 500ml (17)");
    fireEvent.click(category);
    const itemList = screen.getAllByTestId("foodItem");
    expect(itemList.length).toBe(17);
  });

  it("should update cart items in header on clicking Add or Remove", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      )
    );
    const cartBefore = screen.getByText("Cart - (0 items)");
    expect(cartBefore).toBeInTheDocument();

    const category = screen.getByText("Value Biryani Bowl- 500ml (17)");
    fireEvent.click(category);
    const addBtns = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(addBtns[0]);

    const cartAfter = screen.getByText("Cart - (1 items)");
    expect(cartAfter).toBeInTheDocument();

    const RemoveBtns = screen.getAllByRole("button", { name: "Remove" });
    fireEvent.click(RemoveBtns[0]);
    expect(cartBefore).toBeInTheDocument();
  });

  it("should update cart page on adding or removing items", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
          <Cart />
        </Provider>
      )
    );
    const category = screen.getByText("Value Biryani Bowl- 500ml (17)");
    fireEvent.click(category);

    const addBtns = screen.getAllByRole("button", { name: "Add" });
    const RemoveBtns = screen.getAllByRole("button", { name: "Remove" });

    expect(screen.getAllByTestId("foodItem").length).toBe(17);

    fireEvent.click(addBtns[0]);
    expect(screen.getAllByTestId("foodItem").length).toBe(18);

    fireEvent.click(RemoveBtns[0]);
    expect(screen.getAllByTestId("foodItem").length).toBe(17);

    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    expect(screen.getAllByTestId("foodItem").length).toBe(19);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
    expect(screen.getAllByTestId("foodItem").length).toBe(17);
  });
});
