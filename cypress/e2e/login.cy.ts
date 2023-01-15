/* eslint-disable @typescript-eslint/no-unsafe-call */
describe('Tela de login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  });
  it('Login com sucesso', () => {
    cy.contains('Entre na sua conta')
      .should('be.visible')

    cy.get('#email').type('carlos@email.com')
    cy.get('#password').type('1234')

    cy.get('[data-testid="login-button"]').click()

    cy.contains('Listagem de Peixes')
      .should('be.visible')
  })

  it('Logout ', () => {

    cy.get('#email').type('carlos@email.com')
    cy.get('#password').type('1234')

    cy.get('[data-testid="login-button"]').click()

    cy.contains('Listagem de Peixes')
      .should('be.visible')

    cy.get('.logout-icon > button').click()

    cy.contains('Entre na sua conta')
      .should('be.visible')
  })

  it('Senha incorreta', () => {
    cy.contains('Entre na sua conta')
      .should('be.visible')

    cy.get('#email').type('carlos@email.com')
    cy.get('#password').type('1233')

    cy.get('[data-testid="login-button"]').click()

    cy.get('.Toastify__toast-body').contains('E-mail ou senha incorretos')
      .should('to.exist')
  })

  it('Email incorreto', () => {
    cy.contains('Entre na sua conta')
      .should('be.visible')

    cy.get('#email').type('lucas@email.com')
    cy.get('#password').type('123')

    cy.get('[data-testid="login-button"]').click()

    cy.contains('E-mail ou senha incorretos')
      .should('to.exist')
  })
}) 