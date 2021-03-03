import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ProfileLink from ".";

const img =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const name = "Tom Cook";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProfileLink />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<ProfileLink />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("contains profile image", () => {
  const { getByTestId } = render(<ProfileLink img={img} name={name} />);
  expect(getByTestId("image")).toHaveAttribute("src");
});

test.skip("contains user name", () => {
  const { getByTestId } = render(<ProfileLink img={img} name={name} />);
  expect(getByTestId("name")).toHaveTextContent("Tom Cook");
});

test.skip("contains view profile", () => {
  const { getByTestId } = render(<ProfileLink />);
  expect(getByTestId("view-profile")).toHaveTextContent("View profile");
});
