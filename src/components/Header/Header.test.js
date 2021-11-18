import { fireEvent } from "@testing-library/dom";
import { render } from "../../customRender";
import Header from "./Header";
import SubHeader from "../SubHeader/SubHeader";

describe("header component", () => {
  test("pagination should render", () => {
    const { getByTestId } = render(<Header />);
    const div = getByTestId("Header-test");
    expect(div).toBeInTheDocument();
  });

  test("change on input causes change on subheader", () => {
    const { getByTestId } = render(
      <>
        <Header />
        <SubHeader />
      </>
    );
    const input = getByTestId("input-test");
    const displayInput = getByTestId("display-input");
    const inputWord = "hepsiburada case";
    fireEvent.change(input, { target: { value: inputWord } });
    expect(displayInput.innerHTML).toBe(inputWord);
  });
});
