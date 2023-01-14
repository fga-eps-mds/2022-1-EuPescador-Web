import { cpSync } from "fs"

/* eslint-disable @typescript-eslint/no-unsafe-call */
describe('User edit', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')

    cy.contains('Entre na sua conta')
      .should('be.visible')

    cy.get('#email').type('gabriel@email.com')
    cy.get('#password').type('1234')

    cy.get('[data-testid="login-button"]').click()

    cy.get('[data-testid="usuarios-button"').click()

  })

  afterEach(() => {

    cy.get('.logout-icon > button').click()
  })

  it('Entrar na area de usuários e apresentar seus dados', () => {
    cy.contains('Gerência de Usuários').
      should('be.visible')

    cy.contains('Carlos Almeida').should('be.visible').get('[data-testid="editButton-1"').click()

    cy.contains('Alterar Usuário')
      .should('be.visible')

  })

  it('Modificar os dados do usuário', () => {

    cy.contains('Gerência de Usuários').
      should('be.visible')

    cy.contains('Carlos Almeida').should('be.visible').get('[data-testid="editButton-1"').click()

    cy.contains('Alterar Usuário')
      .should('be.visible')

    cy.contains('Nome')
      .should('be.visible')

    cy.get("input[name=Nome]").should('have.value', 'Carlos Almeida')

  })

  it.skip('Não encontrar usuário especifico', () => {

  })

  it.skip('Modificar senha de um usuário', () => {

  })

  it.skip('Logar com o usuário modificado', () => {

  })

  it.skip('Logar e alterar os dados do perfil do usuário modificado', () => {

  })
})