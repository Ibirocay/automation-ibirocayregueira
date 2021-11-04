/// <reference types="cypress" />

// elements
const dashboardTitle = 'Testers Hotel'
const logOut = '.user > .btn'

// actions/functions

function checkDashboardTitle(cy){
    cy.title().should('eq', dashboardTitle)
}

function performLogout(cy, confirmContent){
    cy.get(logOut).click()
    cy.contains(confirmContent)

}

/*function navigateToRoomPage(cy){
    cy.get(':nth-child(1) > .btn').click()
}*/

// exports
module.exports = {
    checkDashboardTitle,
    performLogout
}