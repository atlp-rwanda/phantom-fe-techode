import React from 'react';
import { shallow  } from 'enzyme';
import App from '../App';
import Navbar from '../components/Navbars/navbar/Navbar';


describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    })

    it('should render <App /> with <Navbar/>', () => {
        expect(wrapper.find(Navbar)).toHaveLength(1);
    })

})