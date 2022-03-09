import React from 'react';
import Roles from '../components/roles/Roles';
import DashBoardLayout from '../components/dashBoardLayout/DashBoardLayout';
import { InfoButton, PermissionButton } from '../components/buttons/Buttons';
import { addRole, deleteRole } from '../redux/actions/roleAction';
import store from "../redux/store"
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TableRolesSkeleton from '../components/skeletons/Tables/TableRolesSkeleton';
import { LebalTextButton } from '../components/buttons/LebalButton';
import TablePermissionSkeleton from '../components/skeletons/Tables/TablePermissionsSkeleton';

describe('<Roles />', () =>{
  const props = {
          addRole: jest.fn(),
          deleteRole: jest.fn(),
          assignPermission: jest.fn(),
          deletePermission: jest.fn(),
          roles:[
            {
                id:1,
                name:'Admin',
                permissions:[
                    { id: 1 , permissionName: 'getBus'},
                ]
            }
        ]
      }

      let wrapper;
    beforeEach(()=>{
      wrapper = shallow (<Roles store={store} {...props} /> ).childAt(0).dive();
    });

    it('It should match the snapshot', () => { 
          expect(toJson(wrapper)).toMatchSnapshot();
    });
  
    it('if it should render one TableRolesSkeleton', () =>{
      expect(wrapper.find(TableRolesSkeleton).length).toBe(1);
    });
    
    it('if it should render one DashBoardLayout', () =>{
      expect(wrapper.find(DashBoardLayout).length).toBe(1);
    });

    it('if it should render one TablePermissionSkeleton', () =>{
      expect(wrapper.find(TablePermissionSkeleton).length).toBe(1);
    });
  });