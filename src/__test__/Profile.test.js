import React from "react";
import { shallow } from 'enzyme'
import Profile from '../containers/profile/Profile';
import store from '../redux/store'
import DashBoardLayout from "../components/dashBoardLayout/DashBoardLayout";
/* ========== Start::configuration =========== */ 
import { applyMiddleware , createStore } from 'redux';
import reducers from '../redux/reducers/index';
import { middlewares } from "../redux/store";
import { setProfile } from "../redux/actions/userActions";
import { OperatorProfile } from "../components/skeletons/cards/Profile";
/* ===========  End::configuration =========== */ 



const setUp = (props = {} ) => {
  const component = shallow(<Profile {...props} store={store}/>).childAt(0);
  return component;
}
const findByClass = (component,nameOfClass) => {
  const wrapper = component.find(`.${nameOfClass}`);
  return wrapper;
} 


describe('Profile component ', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  test("It should render dashboard layout",() => {
    // DashBoardLayout
    let wrapper = component.dive().find(DashBoardLayout);
    expect(wrapper.length).toBe(1);
  })  
  it("It should render OperatorProfile component ",() => {
    // OperatorProfile
    let wrapper = component.dive().find(OperatorProfile);
    expect(wrapper.length).toBe(1);
  })  
 
})