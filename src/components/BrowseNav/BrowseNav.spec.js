import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import BrowseNav from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowseNav />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<BrowseNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
