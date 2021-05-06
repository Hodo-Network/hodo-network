import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import TokenList from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TokenList />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<TokenList />).toJSON();
  expect(tree).toMatchSnapshot();
});
