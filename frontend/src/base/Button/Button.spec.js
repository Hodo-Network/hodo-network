import { cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Primary } from './Button.stories';

afterEach(cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Primary {...Primary.args} />, div);
});

test('matches snapshot', () => {
  const tree = renderer.create(<Primary {...Primary.args} />).toJSON();
  expect(tree).toMatchSnapshot();
});
