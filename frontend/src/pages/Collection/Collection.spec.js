import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Collection from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Collection />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Collection />).toJSON();
  expect(tree).toMatchSnapshot();
});
