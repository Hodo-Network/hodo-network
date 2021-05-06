import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import DarkToggle from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DarkToggle />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<DarkToggle />).toJSON();
  expect(tree).toMatchSnapshot();
});
