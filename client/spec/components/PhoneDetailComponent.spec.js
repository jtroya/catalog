import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PhoneDetailComponent from '../../src/components/PhoneDetailComponent';

describe('PhoneDetailComponent', () => {
  let wrapper;
  const getInfoDetail = jest.fn();
  const fakeSelectedItem = [{ 
    model: 'my model', 
    brand: 'my brand', 
    color: 'red',  
    description: 'my description', 
    price: 123,
    storage: '16 GB',
    imageUrl: 'img-url'
  }];

  beforeEach(() => {
    wrapper = shallow(<PhoneDetailComponent 
      phoneId={ 2 }
      selectedItem={ fakeSelectedItem }
      getInfoDetail={ getInfoDetail }
    />);
  });

  it('should render the component', () => {
    expect(wrapper.find('PhoneDetailComponent')).toBeTruthy();
  });

  it('should not render if there is no data', () => {
    wrapper.setProps({ selectedItem: [] });
    expect(wrapper.find('Row')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = shallow(<PhoneDetailComponent 
      phoneId={ 2 }
      selectedItem={ fakeSelectedItem }
      getInfoDetail={ getInfoDetail }
    />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
