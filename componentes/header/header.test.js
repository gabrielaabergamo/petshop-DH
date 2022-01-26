import { createMarkupHeader } from './header';

test('createMarkupHeader should render header', () => {
  expect(createMarkupHeader()).toMatchSnapshot();
});
