import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";

describe("tests for RestaurantCard component", () => {

  it("should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    screen.debug();

    const name = screen.getByText("Bikkgane Biryani");
    expect(name).toBeInTheDocument();
  });
  
  it("should render RestaurantCard component with promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>);
    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument();
  });
});
