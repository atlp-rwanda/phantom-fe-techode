import React from "react";
import { shallow } from 'enzyme'
import Profile from '../containers/profile/Profile';
import DashBoardLayout from '../components/dashBoardLayout/DashBoardLayout'
import SkeletonUpdate from '../components/skeletons/SkeletonUpdate';
import { OperatorProfile } from '../components/skeletons/cards/Profile';
import TextField from '../components/fields/TextField'
import { PrimaryButton } from "../components/buttons/Buttons";

describe('<Profile />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Profile />)
    })
    it('it should render profile component with layout', () => {
        expect(wrapper.find(DashBoardLayout)).toHaveLength(1)
    })
    it('it should render profile component with update profile skeleton', () => {
        expect(wrapper.find(OperatorProfile)).toHaveLength(1)
    })
    it('it should render profile component profile section skeleton', () => {
        expect(wrapper.find(SkeletonUpdate)).toHaveLength(1)
    })
    it('Check if`Textfield component has form`', () => {
        const wrapper = shallow(<TextField />);
        expect(wrapper.find('#form')).toHaveLength(1);
    })
    it('Checks for `Primary button in TextField form component`', () => {
        const wrapper = shallow(<TextField />);
        expect(wrapper.find(PrimaryButton)).toHaveLength(1);
    })
})