import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../../src/components/Header';

describe('Header', () => {
  let wrapper;
  
  it('should render the Header', () => {
    wrapper = shallow(<Header appName="My App" />);
    expect(wrapper.find('Navbar')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Header appName="My App" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
