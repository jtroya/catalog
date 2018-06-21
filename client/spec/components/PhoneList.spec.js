import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';

import PhoneList from '../../src/components/PhoneList';

describe('PhoneList', () => {
  let wrapper;
  const fetchCatalog = jest.fn();
  const fakeCatalog = [
    { model: 'my model', description: 'my description', imageUrl: 'img-urg', price: 123 }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <PhoneList 
          catalog={ fakeCatalog } 
          loading={ false } 
          fetchCatalog={ fetchCatalog } />
      </MemoryRouter>
    );
  });

  it('should render the component', () => {
    expect(wrapper.find('PhoneList')).toBeTruthy();
  });

  it('should render Loading component', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find('Loading')).toBeTruthy();
    expect(wrapper.find('Col').length).toBe(0);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<PhoneList 
      catalog={ fakeCatalog } 
      loading={ false } 
      fetchCatalog={ fetchCatalog } />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
