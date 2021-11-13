import { MemoryRouter as Router } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import { create } from "react-test-renderer";
import { AssetCard } from "./AssetCard";
import { collections } from "../../data/collections";
import { assets } from "../../data/assets";

const nft = assets[0];

afterEach(cleanup);

test("renders correctly", () => {
  let tree = create(
    <Router initialEntries={["/"]}>
      <AssetCard nft={nft} collection={collections[0]} listing={assets[0]} />
    </Router>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
