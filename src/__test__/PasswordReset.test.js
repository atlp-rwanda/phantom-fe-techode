import React from 'react';
import { shallow  } from 'enzyme';
import PasswordReset from '../components/passwordReset/passwordereset';

describe("Resetting password", ()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper = shallow (<PasswordReset />);
    });
    it("render a password reset page with a button 'reset password'", ()=>{
        const test = wrapper.find("#reset");
        expect(test.text()).toBe("Reset password")
      })
  });