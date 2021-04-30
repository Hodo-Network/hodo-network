import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Balance from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Balance />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Balance />).toJSON();
  expect(tree).toMatchSnapshot();
});
