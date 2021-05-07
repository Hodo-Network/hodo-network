import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Collectible from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Collectible />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Collectible />).toJSON();
  expect(tree).toMatchSnapshot();
});
