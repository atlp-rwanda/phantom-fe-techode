import React from 'react';
import { shallow  } from 'enzyme';
import Home from '../containers/Home/Home'
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import HowToStart from '../components/HowToStart/HowToStart';
import Explore from '../components/Explore/Explore';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

describe('<Home />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />);
    })

    it('should render <App /> with <Header />', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    })
    it('should render <App /> with <Intro />', () => {
        expect(wrapper.find(Intro)).toHaveLength(1);
    })
    it('should render <App /> with <HowToStart />', () => {
        expect(wrapper.find(HowToStart)).toHaveLength(1);
    })
    it('should render <App /> with <Explore />', () => {
        expect(wrapper.find(Explore)).toHaveLength(1);
    })
    it('should render <App /> with <Services />', () => {
        expect(wrapper.find(Services)).toHaveLength(1);
    })
    it('should render <App /> with <Testimonials />', () => {
        expect(wrapper.find(Testimonials)).toHaveLength(1);
    })
    it('should render <App /> with <Footer />', () => {
        expect(wrapper.find(Footer)).toHaveLength(1);
    })
})