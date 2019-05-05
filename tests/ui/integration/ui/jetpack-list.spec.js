/// <reference types="Cypress" />

context('Jetpack list', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('List all Jetpacks', () => {
        cy.contains('Jetpack Fortnite Wiki\n')
    })


it('Create Jetpacks', () => {
    cy.get('#j_name').type('jetpack name')
    .should('have.value', 'jetpack name')

    cy.get('#j_submit').click()
})
});