import React from 'react';
import { shallow  } from 'enzyme';
import Navbar from '../components/Navbars/navbar/Navbar';


describe("Phantom project", ()=>{

  let wrapper;
  beforeEach(()=>{
    wrapper = shallow (<Navbar />);
  });

it("render a Landing page with LOGO of 'Phantom'", ()=>{
    const test = wrapper.find("#log");
    expect(test.text()).toBe("Phantom")
  })
});
