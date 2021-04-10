import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Onboarding from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Onboarding />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Onboarding />).toJSON();
  expect(tree).toMatchSnapshot();
});
