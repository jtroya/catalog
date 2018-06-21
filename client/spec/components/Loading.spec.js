import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Loading from '../../src/components/Loading';

describe('Loading', () => {
  it('should render the Loading component', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('Preloader')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Loading />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
