import React from 'react';
import { shallow, mount } from 'enzyme';
import SkeletonUpdate from '../components/signInSkeleton/SkeletonUpdate';
import Login from '../components/signIn/LoginForm'

describe('Login Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login />)
    })

    it("renders LoginForm component without crashing", () => {
        shallow(<Login />);
    });

    it('should render without throwing an error', () => {
        expect(shallow(<Login />).find('form.login').exists()).toBe(false)
    })
    it('renders a email input', () => {
        expect(shallow(<Login />).find('#email').length).toEqual(0)
    })
    it('renders a password input', () => {
        expect(shallow(<Login />).find('#password').length).toEqual(0)
    })
    it('it should render UI skeleton when page is loading', () => {
        expect(wrapper.find(SkeletonUpdate)).toHaveLength(1)
    })
})

