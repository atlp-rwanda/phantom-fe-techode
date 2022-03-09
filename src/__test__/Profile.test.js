import React from "react";
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

import Profile from '../containers/profile/Profile';
import DashBoardLayout from '../components/dashBoardLayout/DashBoardLayout'
import SkeletonUpdate from '../components/skeletons/SkeletonUpdate';
import { OperatorProfile } from '../components/skeletons/cards/Profile';
import TextField from '../components/fields/TextField'
import { PrimaryButton } from "../components/buttons/Buttons";
import store from '../redux/store'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);


describe('<Profile />', () => {
    let wrapper;
    let store;
    let component;


    
    beforeEach(()=>{
      store = mockStore({
        myState: 'sample text',
      });
      component = renderer.create(
        <Provider store={store}>
          <Profile email={''} />
        </Provider>
      )
      wrapper = shallow (<Profile />);
    });

   
    // it('it should render profile component with layout', () => {
    //     expect(wrapper.find(DashBoardLayout)).toHaveLength(0)
    // })
    // it('it should render profile component with update profile skeleton', () => {
    //     expect(wrapper.find(OperatorProfile)).toHaveLength(0)
    // })
    // it('it should render profile component profile section skeleton', () => {
    //     expect(wrapper.find(SkeletonUpdate)).toHaveLength(0)
    // })
    it('Checks for `Primary button in TextField form component`', () => {
        expect(component.find(PrimaryButton)).toHaveLength(0);
    })
})