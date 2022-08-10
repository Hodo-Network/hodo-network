import { cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Common } from './RarityBadge.stories';

afterEach(cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Common {...Common.args} />, div);
});

test('matches snapshot', () => {
  const tree = renderer.create(<Common {...Common.args} />).toJSON();
  expect(tree).toMatchSnapshot();
});
