/// <reference types="cypress" />

import * as indexFuncs from '../pages/index'
import * as dashboardFuncs from '../pages/dashboard'
import * as targets from '../targets/targets'

// Test suite
describe('Test suite', function(){

    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs.checkIndexTitle(cy)
    })
    
    // Test case
    it('Perform login and logout', function(){
        indexFuncs.validLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.performLogout(cy, 'Login')

    })


})