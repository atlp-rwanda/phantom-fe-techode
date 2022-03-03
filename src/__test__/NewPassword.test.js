import React from 'react';
import { shallow  } from 'enzyme';
import NewPassword from '../components/passwordReset/newpassword';
import DashBoardlayout from '../components/dashBoardLayout/DashBoardLayout';

describe("Phantom project", ()=>{

    let wrapper;
    beforeEach(()=>{
      wrapper = shallow (<NewPassword />);
    });
  
  it("render a Landing page with LOGO of 'Phantom'", ()=>{
      const test = wrapper.find("#update");
      expect(test.text()).toBe("Update")
    })

    it("render a Landing page with LOGO of 'Phantom'", ()=>{
        expect(wrapper.find(DashBoardlayout)).toHaveLength(1) 
      })
  });