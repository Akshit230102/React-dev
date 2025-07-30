import "@testing-library/jest-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/RestaurantListMock.json";

describe("tests for search functionality", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

  beforeEach(async()=>{
    await act(async() => render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    ));
  });

  it("should render Body Component with search functionality",() => {
    const searchBtn = screen.getByRole("button",{name: "Search"});
    expect(searchBtn).toBeInTheDocument();
  });

  it("should render all restaurant cards",()=>{
    const resCards  = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(7);
  });

  it("should render only the searched restaurant",()=>{
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "Biryani"}});

    const searchBtn = screen.getByRole("button", {name: "Search"});
    fireEvent.click(searchBtn);

    const resCards  = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(1);
  });

  it("should render top rated restaurants on click",()=>{
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);
    const resCards  = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(4);
  });
});
