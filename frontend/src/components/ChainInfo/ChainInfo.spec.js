import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ChainInfo from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChainInfo />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<ChainInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
