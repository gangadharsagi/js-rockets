import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NasaList } from '../NasaList';

Enzyme.configure({ adapter: new Adapter() });

describe('NasaList', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <NasaList />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
