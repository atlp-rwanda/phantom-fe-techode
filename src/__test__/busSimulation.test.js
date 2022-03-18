//function start updateActiveBus
//component DashBoardLayout Primary LocationSim DriverSim BusSim
import React from "react";
import BusSimulation from "../containers/BusSimulation/BusSimulation";
import DashBoardLayout from '../components/dashBoardLayout/DashBoardLayout';

import { start, updateActiveBus } from '../redux/actions/ActiveBus'
import store from '../redux/store';
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import LocationSim from "../components/LocationSim/LocationSim";
import DriverSim from "../components/LocationSim/DriverSim";
import { Primary } from "../components/buttons/Buttons";
import BusSim from "../components/BusSim/BusSim";

describe('<BusSimulation />', () => {
    const props = {
        start: jest.fn(),
        updateActiveBus: jest.fn(),
        busSimulation: [
            {
                driver: { id:1 , name: 'John Doe'},
                bus: { id:1 , plate: "RAE107D" },
                passengers:0,
                location:{lat : 30.21503 , lon: -30.620},
                busStatus:"parked"
            }
        ]
    }

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BusSimulation store={store} {...props} />).childAt(0).dive();
    });

    // it('It should match the bus simulation snapshot', () => {
    //     expect(toJson(wrapper)).toMatchSnapshot();
    // })

    it('if it should render one DashBoardLayout', () =>{
        expect(wrapper.find(DashBoardLayout).length).toBe(1);
    });


    it('if it should render one Primary', () =>{
        expect(wrapper.find(Primary).length).toBe(3);
    });


})