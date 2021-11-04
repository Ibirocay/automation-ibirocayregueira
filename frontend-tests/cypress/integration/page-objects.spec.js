/// <reference types="cypress" />

import * as indexFuncs from '../pages/index'
import * as dashboardFuncs from '../pages/dashboard'
import * as clientsFuncs from '../pages/clients'
import * as billsFuncs from '../pages/bills'
import * as roomsFuncs from '../pages/rooms'
import * as targets from '../targets/targets'

// Test suite
describe('Test suite', function(){

    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs.checkIndexTitle(cy)
        indexFuncs.validLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })

    afterEach(() => {
        dashboardFuncs.performLogout(cy, 'Login')
    })
    
    // Test cases

    it('Check rooms', function(){
        roomsFuncs.checkRoomsHeader(cy)
         
    })

    it('Delete client', function(){
      
        clientsFuncs.deleteClient(cy)
    })


    it('Add client', function(){
      
        clientsFuncs.createClient(cy,targets.client, targets.email, targets.phone)
    })

    it('Change bill payment status', function(){
      
        billsFuncs.billPaid(cy)
        billsFuncs.billNotPaid(cy)
    })

    it('Update a room category', function(){
        roomsFuncs.updateCategory(cy)
         
    })



})