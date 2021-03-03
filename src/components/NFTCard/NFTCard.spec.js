import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NFTCard from ".";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NFTCard />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<NFTCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
