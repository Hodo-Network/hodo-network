import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import FeaturedNfts from ".";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeaturedNfts />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<FeaturedNfts />).toJSON();
  expect(tree).toMatchSnapshot();
});
