import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import TokenBalance from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TokenBalance />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<TokenBalance />).toJSON();
  expect(tree).toMatchSnapshot();
});
