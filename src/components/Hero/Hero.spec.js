import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Hero from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Hero />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Hero />).toJSON();
  expect(tree).toMatchSnapshot();
});
