import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import LeafletMap from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LeafletMap />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<LeafletMap />).toJSON();
  expect(tree).toMatchSnapshot();
});
