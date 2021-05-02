import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Faq from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Faq />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Faq />).toJSON();
  expect(tree).toMatchSnapshot();
});
