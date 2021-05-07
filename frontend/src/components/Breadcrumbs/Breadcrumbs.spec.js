import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Breadcrumbs from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Breadcrumbs />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Breadcrumbs />).toJSON();
  expect(tree).toMatchSnapshot();
});
