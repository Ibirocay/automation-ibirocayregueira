/// <reference types="cypress" />


// elements
const enterRooms = '.blocks > :nth-child(1) > .btn'
const roomsHeader = 'Rooms'
const roomId = 'Room:'
const editOptionsRoom1 = ':nth-child(1) > .action'
const edit = '.menu > :nth-child(1)'
const saveButton = '.blue'


// actions/functions
function checkRoomsHeader(cy){
    cy.get(enterRooms).click()
    cy.contains(roomsHeader)
}

function updateCategory(cy){
    cy.get(enterRooms).click()
    cy.contains(roomsHeader)
    cy.get(editOptionsRoom1).click()
    cy.get(edit).click()
    cy.contains(roomId)
    cy.get(':nth-child(3) > select').select('single').should('have.value', 'single')
    cy.get(saveButton).click()
    cy.contains('single')
    cy.get(editOptionsRoom1).click()
    cy.get(edit).click()
    cy.contains(roomId)
    cy.get(':nth-child(3) > select').select('double').should('have.value', 'double')
    cy.get(saveButton).click()
    cy.contains('double')

}

// exports
module.exports = {
    checkRoomsHeader,
    updateCategory
}
