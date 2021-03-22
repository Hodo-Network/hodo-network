import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import RarityBadge from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RarityBadge />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<RarityBadge />).toJSON();
  expect(tree).toMatchSnapshot();
});
