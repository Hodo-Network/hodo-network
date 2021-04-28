import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import SelectCollection from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SelectCollection />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<SelectCollection />).toJSON();
  expect(tree).toMatchSnapshot();
});
