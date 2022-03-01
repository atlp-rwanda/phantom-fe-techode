import React from "react";
import { shallow } from 'enzyme'
import Logout from '../components/logout/Logout'
import DashboardLayout from '../components/dashBoardLayout/DashBoardLayout'
import SkeletonUpdate from '../components/skeletons/SkeletonUpdate';
import SkeletonLogout from '../components/skeletons/SkeletonLogout';

describe('<Logout />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Logout />)
    })
    it('it should render logout page with layout', () => {
        expect(wrapper.find(DashboardLayout)).toHaveLength(1)
    })
    it('it should render logout page with update profile skeleton', () => {
        expect(wrapper.find(SkeletonLogout)).toHaveLength(1)
    })
    it('it should render logout page logout section skeleton', () => {
        expect(wrapper.find(SkeletonUpdate)).toHaveLength(1)
    })
})