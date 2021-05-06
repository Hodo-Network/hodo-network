import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Roadmap from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Roadmap />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Roadmap />).toJSON();
  expect(tree).toMatchSnapshot();
});
