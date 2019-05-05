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

    it('Search Jetpacks', () => {
        cy.get('#start').type('2/2/2 4:44')
        .should('have.value','2/2/2 4:44')

        cy.get('#end').type('2/2/2040 4:44')
        .should('have.value','2/2/2040 4:44')

        cy.get('#r_submit').click()

        cy.get('#search_result').contains('Jetpack Fortnite Wiki\n')
    })
});