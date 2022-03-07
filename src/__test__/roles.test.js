import React from 'react';
import { shallow  } from 'enzyme';
import Roles from '../components/roles/Roles';
import DashBoardLayout from '../components/dashBoardLayout/DashBoardLayout';
import { InfoButton, PermissionButton } from '../components/buttons/Buttons';

describe("Tests of create roles & set permissions", ()=>{

    let wrapper;
    beforeEach(()=>{
      wrapper = shallow (<Roles />);
    });
  
//   it("render a Landing page with LOGO of 'Phantom'", ()=>{
//       const test = wrapper.find("#update");
//       expect(test.text()).toBe("Update")
//     })
const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
);
const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
)
beforeEach(() => {
    wrapper(<Profile />);
})

    it("render a Landing page with LOGO of 'Phantom'", ()=>{
        expect(wrapper.find(DashBoardLayout)).toHaveLength(1) 
      })

      it("Should have <InfoButton />'", ()=>{
        expect(wrapper.find(InfoButton)).toHaveLength(5) 
      })

      it("Should have <PermissionButton />'", ()=>{
        expect(wrapper.find(PermissionButton)).toHaveLength(2) 
      })
  });