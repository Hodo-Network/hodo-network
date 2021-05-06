import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Collections from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Collections />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Collections />).toJSON();
  expect(tree).toMatchSnapshot();
});
