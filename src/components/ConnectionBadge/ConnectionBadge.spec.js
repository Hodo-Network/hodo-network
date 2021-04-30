import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import ConnectionBadge from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConnectionBadge />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<ConnectionBadge />).toJSON();
  expect(tree).toMatchSnapshot();
});
