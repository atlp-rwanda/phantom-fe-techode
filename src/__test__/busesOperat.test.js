import React from 'react';
import DashBoardLayout from '../components/dashBoardLayout/DashBoardLayout';
import store from "../redux/store"
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Busesoperat from '../containers/busesOp/Busesoperat';
import TableSkeleton from '../components/skeletons/Tables/RemovePermisionSkeleton';
import Profile from '../components/skeletons/cards/InfSkeleton';

describe('<BusesOperat />', () =>{
  const props = {
        createBus: jest.fn(),
        updateBusInfo: jest.fn(),
        deleteBus: jest.fn(),
        buses: [
            {
                id: 1,
                busType: "Yutong",
                route: 401,
                plate: "RAF102F"
            }
        ]
      }

      let wrapper;
    beforeEach(()=>{
      wrapper = shallow (<Busesoperat store={store} {...props} /> ).childAt(0).dive();
    });

    it('It should match the snapshot', () => { 
          expect(toJson(wrapper)).toMatchSnapshot();
    });
  
    it('if it should render one TableRolesSkeleton', () =>{
      expect(wrapper.find(TableSkeleton).length).toBe(1);
    });

    it('if it should render one Profile', () =>{
        expect(wrapper.find(Profile).length).toBe(1);
      });
    
    it('if it should render one DashBoardLayout', () =>{
      expect(wrapper.find(DashBoardLayout).length).toBe(1);
    });

  });