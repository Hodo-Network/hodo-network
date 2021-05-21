import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import MenuClosedIcon from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MenuClosedIcon />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<MenuClosedIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
