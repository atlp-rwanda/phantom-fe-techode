import React from 'react';
import { shallow  } from 'enzyme';
import Roles from '../components/roles/Roles';
import DashBoardLayout from '../components/dashBoardLayout/DashBoardLayout';
import { InfoButton, PermissionButton } from '../components/buttons/Buttons';
import { addRole, deleteRole } from '../redux/actions/roleAction';
import store from "../redux/store"
import { Provider } from 'react-redux'

describe("Tests of create roles & set permissions", ()=>{

    let wrapper;
    beforeEach(()=>{
      wrapper = shallow (<Provider store={store}><Roles /></Provider>);
    });

    it("dispatches ADD_ROLE action and returns an error", async () => {
      
      try { 
        await store.dispatch(addRole());
      } catch {
        const actions = store.getActions();
    
        expect.assertions(4);
        expect(actions[0].type).toEqual("ADD_ROLE");
      }
    });

    it("dispatches DELETE_ROLE action and returns an error", async () => {
      
      try { 
        await store.dispatch(deleteRole());
      } catch {
        const actions = store.getActions();
    
        expect.assertions(4);
        expect(actions[1].type).toEqual("DELETE_ROLE");
      }
    });



  });