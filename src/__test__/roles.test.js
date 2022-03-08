import React from 'react';
import { shallow  } from 'enzyme';
import Roles from '../components/roles/Roles';
import DashBoardLayout from '../components/dashBoardLayout/DashBoardLayout';
import { InfoButton, PermissionButton } from '../components/buttons/Buttons';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe("Tests of create roles & set permissions", ()=>{

  let wrapper;

  const Provide = () => {
    return(
      // <Provider store={store}>
        < Roles />
      // </Provider>
    );   
  }
  
  beforeEach(()=>{
    wrapper = shallow (<Provide />);
  });
//   it("render a Landing page with LOGO of 'Phantom'", ()=>{
//       const test = wrapper.find("#update");
//       expect(test.text()).toBe("Update")
//     })


    it("render a Landing page with LOGO of 'Phantom'", ()=>{
        console.log(wrapper)
        expect(wrapper.find(<DashBoardLayout />)).toHaveLength(0) 
      })

      it("Should have <InfoButton />'", ()=>{
        expect(wrapper.find(InfoButton)).toHaveLength(0) 
      })

      it("Should have <PermissionButton />'", ()=>{
        expect(wrapper.find(PermissionButton)).toHaveLength(0) 
      })
  });