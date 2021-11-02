/// <reference types="cypress" />

// elements
const indexTitle = 'Testers Hotel'
const userTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const loginButton = '.btn'

// actions/Functions

function checkIndexTitle(cy){
    cy.title().should('eq', indexTitle)
}

function validLogin(cy, username, password, confirmContent){
    cy.get(userTextfield).type(username)
    cy.get(passwordTextfield).type(password)
    cy.get(loginButton).click()
    cy.contains(confirmContent)
}

// exports
module.exports = {
    checkIndexTitle,
    validLogin
}

