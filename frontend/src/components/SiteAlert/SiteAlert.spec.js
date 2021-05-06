import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import SiteAlert from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SiteAlert />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<SiteAlert />).toJSON();
  expect(tree).toMatchSnapshot();
});
