import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import EthBalance from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EthBalance />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<EthBalance />).toJSON();
  expect(tree).toMatchSnapshot();
});
