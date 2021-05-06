import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ChainAddButton from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChainAddButton />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<ChainAddButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
