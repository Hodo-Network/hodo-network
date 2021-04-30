import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import OnboardingButton from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OnboardingButton />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<OnboardingButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
