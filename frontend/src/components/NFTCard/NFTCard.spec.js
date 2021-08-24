import { MemoryRouter as Router } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";
import { NFTCard } from "./NFTCard";
import { collectibles } from "../../data/collectibles";

const nft = collectibles[0];

afterEach(cleanup);

test("renders correctly", () => {
  let tree = create(
    <Router initialEntries={["/"]}>
      <NFTCard nft={nft} />
    </Router>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
