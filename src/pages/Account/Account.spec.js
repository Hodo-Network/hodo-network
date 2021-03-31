import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Account from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Account />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Account />).toJSON();
  expect(tree).toMatchSnapshot();
});
