import React from "react";
import { shallow } from 'enzyme'
import BusOperation from '../containers/busesOp/Busesoperat';
import store from '../redux/store'
import DashboardLayout from "../components/dashBoardLayout/dashBoardLayout";
/* ========== Start::configuration =========== */ 
import { applyMiddleware , createStore } from 'redux';
import reducers from '../redux/reducers/index';
import { middlewares } from "../redux/store";
import { setProfile } from "../redux/actions/userActions";
import { OperatorProfile } from "../components/skeletons/cards/Profile";
/* ===========  End::configuration =========== */ 



const setUp = (props = {} ) => {
  const component = shallow(<BusOperation {...props} store={store}/>).childAt(0);
  return component;
}
const findByClass = (component,nameOfClass) => {
  const wrapper = component.find(`.${nameOfClass}`);
  return wrapper;
} 


describe('Bus component ', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  test("It should render dashboard layout",() => {
    // DashBoardLayout
    let wrapper = component.dive().find(DashboardLayout);
    expect(wrapper.length).toBe(1);
  })  
 
})