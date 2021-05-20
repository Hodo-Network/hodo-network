import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import FaqList from "./index";
import { faqs } from "../../data/faqs";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FaqList items={faqs} />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<FaqList items={faqs} />).toJSON();
  expect(tree).toMatchSnapshot();
});
