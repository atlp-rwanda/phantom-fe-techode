import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import store from "../redux/store";
import SkeletonUpdate from '../components/signInSkeleton/SkeletonUpdate';
import Login from '../containers/SignIn/LoginForm'

describe('<Login />', () =>{
  
    let wrapper;
  beforeEach(()=>{
    wrapper = shallow (<Login store={store} /> ).childAt(0).dive();
  });

  it('It should match the snapshot', () => { 
        expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('if it should render SkeletonUpdate', () =>{
    expect(wrapper.find(SkeletonUpdate).length).toBe(1);
  });

})
