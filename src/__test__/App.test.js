import React from 'react';
import { shallow  } from 'enzyme';
import toJson from 'enzyme-to-json';

import store from "../redux/store"
import App from '../App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

describe('<App />', () =>{
  
        let wrapper;
      beforeEach(()=>{
        wrapper = shallow (<App store={store} /> ).childAt(0).dive();
      });
  
      it('It should match the snapshot', () => { 
            expect(toJson(wrapper)).toMatchSnapshot();
      });
    
      it('if it should render one Siwtch', () =>{
        expect(wrapper.find(Switch).length).toBe(1);
      });
  
      it('if it should render one Route', () =>{
          expect(wrapper.find(Route).length).toBe(7);
        });
      
      it('if it should render ProtectedRoutes', () =>{
        expect(wrapper.find(ProtectedRoute).length).toBe(12);
      });
  
      it('if it should render one Router', () =>{
        expect(wrapper.find(Router).length).toBe(1);
      });

    });