import React from "react";
import { shallow } from 'enzyme'
import Logout from '../components/logout/Logout'
import DashboardLayout from '../components/dashBoardLayout/DashBoardLayout'
import SkeletonUpdate from '../components/skeletons/SkeletonUpdate';
import SkeletonLogout from '../components/skeletons/SkeletonLogout';
import TextField from '../components/fields/TextField'
import { PrimaryButton } from "../components/buttons/Buttons";

describe('<Logout />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Logout />)
    })
    it('it should render logout component with layout', () => {
        expect(wrapper.find(DashboardLayout)).toHaveLength(1)
    })
    it('it should render logout component with update profile skeleton', () => {
        expect(wrapper.find(SkeletonLogout)).toHaveLength(1)
    })
    it('it should render logout component logout section skeleton', () => {
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