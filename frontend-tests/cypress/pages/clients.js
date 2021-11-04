/// <reference types="cypress" />

//elements
const clientTextfield = ':nth-child(1) > input'
const emailTextfield = ':nth-child(2) > input'
const phoneTextfield = ':nth-child(3) > input'
const clientTest = '.clients > :nth-child(2)'
const enterClients = '.blocks > :nth-child(2) > .btn'
const saveButton = '.blue'

// actions/functions

function deleteClient(cy){
    cy.get(enterClients).click()
    cy.contains('Clients')
    cy.get(':nth-child(2) > .action').click()
    cy.contains('Edit')
    cy.get('.menu > :nth-child(2)').contains('Delete').click()
    cy.get(clientTest).should('not.exist')

}

function createClient(cy, client, email, phone){
    cy.get(enterClients).click()
    cy.get('h2 > .btn').click()
    cy.contains('New Client')
    cy.get(clientTextfield).type(client)
    cy.get(emailTextfield).type(email)
    cy.get(phoneTextfield).type(phone)
    cy.get(saveButton).click()
    cy.get(clientTest).should('exist')
}

// exports
module.exports = {
    deleteClient,
    createClient
}