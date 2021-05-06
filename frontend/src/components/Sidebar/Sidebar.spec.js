import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Sidebar from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sidebar />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Sidebar />).toJSON();
  expect(tree).toMatchSnapshot();
});
