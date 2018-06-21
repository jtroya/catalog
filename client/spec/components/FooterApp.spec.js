import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FooterApp from '../../src/components/FooterApp';

describe('FooterApp', () => {
  it('should render the FooterApp', () => {
    const wrapper = shallow(<FooterApp />);
    expect(wrapper.find('Footer')).toBeTruthy();
  });

  it('matches the snapshot', ()=> {
    const tree = shallow(<FooterApp />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
