/// <reference types="cypress" />

// elements
const clickBillsPage = '.blocks > :nth-child(3) > .btn'
const editDeleteButton = '.action'
const billNr1 = '.menu > :nth-child(1)'
const billId = 'Bill:'
const saveButton = '.blue'
const backButton = ':nth-child(3) > .btn'

// actions/functions
function billPaid(cy){
    cy.get(clickBillsPage).click()
    cy.contains('Bills')
    cy.get(editDeleteButton).click()
    cy.get(billNr1).click()
    cy.contains(billId)
    cy.get('.checkbox').click()
    cy.get(saveButton).click()
    cy.contains('Paid: Yes')
    cy.get(backButton).click()
    
}

function billNotPaid(cy){
    cy.get(clickBillsPage).click()
    cy.contains('Bills')
    cy.get(editDeleteButton).click()
    cy.get(billNr1).click()
    cy.contains(billId)
    cy.get('.checkbox').click()
    cy.get(saveButton).click()
    cy.contains('Paid: No')
    cy.get(backButton).click()

}

// exports
module.exports = {
    billPaid,
    billNotPaid
}