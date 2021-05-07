import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import CollectionCard from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CollectionCard />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<CollectionCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
