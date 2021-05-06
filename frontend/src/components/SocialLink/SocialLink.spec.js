import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import SocialLink from "./index";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocialLink />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<SocialLink />).toJSON();
  expect(tree).toMatchSnapshot();
});
