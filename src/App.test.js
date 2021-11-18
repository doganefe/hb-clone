import { render } from "./customRender";
import App from "./App";

test("renders app", () => {
  const { getByTestId } = render(<App />);
  const appDiv = getByTestId("app-test");
  expect(appDiv).toBeInTheDocument();
});
