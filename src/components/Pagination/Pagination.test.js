import { fireEvent } from "@testing-library/dom";
import { render } from "../../customRender";
import Pagination from "./Pagination";

describe("pagination component", () => {
  test("pagination should render", () => {
    const { getByTestId } = render(<Pagination />);
    const div = getByTestId("pagination-test");
    expect(div).toBeInTheDocument();
  });

  test("change current page", () => {
    const { getByTestId } = render(<Pagination />);
    const numDiv = getByTestId("pagination-num-test-1");
    fireEvent.click(numDiv);
    expect(numDiv).toHaveClass("selected");
  });
});
