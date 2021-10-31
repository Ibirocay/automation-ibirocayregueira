/// <reference types="cypress" />

//This is a test suite
describe('test suite', function(){
    //This is a test case (not included in assignment, only used for login purpose and practice)
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')

    })

    it('Testfall 2', function(){
         
    })

})