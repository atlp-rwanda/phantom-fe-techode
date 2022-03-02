import React from 'react';
import { shallow  } from 'enzyme';
import NewPassword from '../components/passwordReset/newpassword';
import DashBoardlayout from '../components/dashBoardLayout/DashBoardLayout';
import { PrimaryButton } from '../components/buttons/Buttons';

describe("Phantom project", ()=>{

    let wrapper;
    beforeEach(()=>{
      wrapper = shallow (<NewPassword />);
    });
  
    it("Check if Confirm new password component have Primary button", ()=>{
      expect(wrapper.find(PrimaryButton)).toHaveLength(1) 
    })
    it("Check if Confirm new password component have layout", ()=>{
        expect(wrapper.find(DashBoardlayout)).toHaveLength(1) 
      })
  });