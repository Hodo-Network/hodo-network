import { cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { assets } from '../../data/assets';
import { collections } from '../../data/collections';
import { AssetCard } from './AssetCard';

const nft = assets[0];

afterEach(cleanup);

test('renders correctly', () => {
  let tree = create(
    <Router initialEntries={['/']}>
      <AssetCard nft={nft} collection={collections[0]} listing={assets[0]} />
    </Router>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
