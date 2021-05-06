import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Explore from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Explore />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Explore />).toJSON();
  expect(tree).toMatchSnapshot();
});
