import { cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Home } from './Breadcrumbs.stories';

afterEach(cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home {...Home.args} />, div);
});

test('matches snapshot', () => {
  const tree = renderer.create(<Home {...Home.args} />).toJSON();
  expect(tree).toMatchSnapshot();
});
