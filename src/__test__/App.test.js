import React from 'react';
import { shallow  } from 'enzyme';
import App from '../App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    })

    it('should render <App /> with <Switch/>', () => {
        expect(wrapper.find(Switch)).toHaveLength(1);
    })
    it('should render <App /> with eight <Route />', () => {
<<<<<<< HEAD
        expect(wrapper.find(Route)).toHaveLength(13);
=======
        expect(wrapper.find(Route)).toHaveLength(11);
>>>>>>> ft(pagination, more, test):addition of test, pagination, more and scrolling
    })
    it('should render <App /> with <Router />', () => {
        expect(wrapper.find(Router)).toHaveLength(1);
    })

})