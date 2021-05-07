import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NFTList from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NFTList />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<NFTList />).toJSON();
  expect(tree).toMatchSnapshot();
});
