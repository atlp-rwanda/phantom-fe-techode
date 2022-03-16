import React from "react";
/* ========== Start::configuration =========== */ 
import { setProfile, update } from "../../redux/actions/userActions";
import { testStore } from "../../utls/testStore";
/* ===========  End::configuration =========== */ 


describe('Integration testing ', () => {
    let createtedStore;
    beforeEach(() => {
      createtedStore = testStore();      
    })
    
    it("Testing store",() => {
      // DashBoardLayout
      const expectpectedState = {
          id: 1, 
          username: 'Doej',
          firstname: 'John',
          lastname: 'Doe',
          telephone: '0700000000',
          email:'email@gmail.com', 
          type:'driver',
          profile:''  
      };
      
      const newState = createtedStore.getState();
      expect(JSON.stringify(newState.user)).toBe(JSON.stringify(expectpectedState));
    }) 
    it("Updating profile ",() => {
      const profileUrl = 'myProfile';       
      createtedStore.dispatch(setProfile(profileUrl))
      
      const currentUserState = createtedStore.getState().user;
      expect(currentUserState.profile).toEqual(profileUrl);
    }) 
    it("Updating user infromation",() => {
      const newUpdatedUserState = {
        username: 'Hello',
        firstName: 'ss',
        lastName: 'Doe',
        phone: '0700000000',
        email:'email@gmail.com', 
      };

      createtedStore.dispatch(update(newUpdatedUserState))
      const currentUserState = createtedStore.getState().user;

      expect(currentUserState.firstname).toEqual(newUpdatedUserState.firstName);
      expect(currentUserState.lastname).toEqual(newUpdatedUserState.lastName);
      expect(currentUserState.telephone).toEqual(newUpdatedUserState.phone);
      expect(currentUserState.username).toEqual(newUpdatedUserState.username);
      expect(currentUserState.email).toEqual(newUpdatedUserState.email);
    }) 
  })