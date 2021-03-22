import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ComingSoon from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ComingSoon />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<ComingSoon />).toJSON();
  expect(tree).toMatchSnapshot();
});
