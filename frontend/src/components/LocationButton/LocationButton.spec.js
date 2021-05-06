import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import LocationButton from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LocationButton />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<LocationButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
