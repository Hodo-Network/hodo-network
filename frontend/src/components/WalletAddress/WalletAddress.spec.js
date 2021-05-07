import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import WalletAddress from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WalletAddress />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<WalletAddress />).toJSON();
  expect(tree).toMatchSnapshot();
});
