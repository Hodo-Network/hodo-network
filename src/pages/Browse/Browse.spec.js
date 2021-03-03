import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Browse from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Browse />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Browse />).toJSON();
  expect(tree).toMatchSnapshot();
});
