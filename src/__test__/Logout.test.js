import React from "react";
import { shallow } from 'enzyme'
import Logout from '../components/logout/Logout'
import DashboardLayout from '../components/dashBoardLayout/DashBoardLayout'
import SkeletonUpdate from '../components/skeletons/SkeletonUpdate';
import SkeletonLogout from '../components/skeletons/SkeletonLogout';
import TextField from '../components/fields/TextField'
import { PrimaryButton } from "../components/buttons/Buttons";
import store from "../redux/store";


const setUp = (props = {} ) => {
    const component = shallow(<Logout {...props} store={store}/>).childAt(0);
    return component;
  }

  const setUpText = (props = {} ) => {
    const component = shallow(<TextField {...props} store={store}/>).childAt(0);
    return component;
  }


describe('<Logout />', () => {
    let wrapper;
    let textWrapper;
    beforeEach(() => {
        wrapper = setUp();
        textWrapper = setUpText()
    })
    it('it should render logout component with layout', () => {
        expect(wrapper.find(DashboardLayout)).toHaveLength(0)
    })
    it('it should render logout component with update profile skeleton', () => {
        expect(wrapper.find(SkeletonLogout)).toHaveLength(0)
    })
    it('it should render logout component logout section skeleton', () => {
        expect(wrapper.find(SkeletonUpdate)).toHaveLength(0)
    })
    it('Check if`Textfield component has form`', () => {
      
        expect(textWrapper.find('#form')).toHaveLength(0);
    })
    it('Checks for `Primary button in TextField form component`', () => {
        
        expect(textWrapper.find(PrimaryButton)).toHaveLength(0);
    })
})