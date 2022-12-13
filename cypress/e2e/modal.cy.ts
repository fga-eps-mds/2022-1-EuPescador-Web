/* eslint-disable @typescript-eslint/no-unsafe-call */
describe('Modal', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')

        cy.contains('Entre na sua conta')
            .should('be.visible')

        cy.get('#email').type('marcelo@email.com')
        cy.get('#password').type('123')

        cy.get('[data-testid="login-button"]').click()
    })

    it('Entrar em um peixe e fechar a modal', () => {
        cy.contains('Listagem de Peixes')
            .should('be.visible')

        cy.contains('Ituí-cavalo').click()

        cy.contains('Apteronotus camposdapazi')
            .should('be.visible')
    });

    it.skip('Editar peixe', () => {

    });

    it.skip('Deletar peixe', () => {

    })
});