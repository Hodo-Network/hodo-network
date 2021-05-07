import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import CollectionCardEmpty from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CollectionCardEmpty />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<CollectionCardEmpty />).toJSON();
  expect(tree).toMatchSnapshot();
});
