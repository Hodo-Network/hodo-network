import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";
import Sidebar from "./index";

let miniSidebar = false;
const setMiniSidebar = (val) => {
  miniSidebar = val;
};

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Sidebar
      toggle={() => setMiniSidebar(!miniSidebar)}
      miniSidebar={miniSidebar}
    />,
    div
  );
});

test("matches snapshot", () => {
  const tree = create(
    <Sidebar
      toggle={() => setMiniSidebar(!miniSidebar)}
      miniSidebar={miniSidebar}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
