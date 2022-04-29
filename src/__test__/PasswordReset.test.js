import React from 'react';
import { shallow  } from 'enzyme';
import PasswordReset from '../components/passwordReset/passwordereset';
import store from "../redux/store";

describe("Resetting password", ()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper = shallow (<PasswordReset store={store} /> ).childAt(0).dive();
    });
    it("render a password reset page with a button 'reset password'", ()=>{
        const test = wrapper.find("#reset");
        expect(test.text()).toBe("Submit")
      })
  });