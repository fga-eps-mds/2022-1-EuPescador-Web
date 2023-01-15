
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

  it.only('Modificar os dados do usuário', () => {
    cy.contains('Gerência de Usuários')
      .should('be.visible')

    cy.url().should('include', '/usuarios')

    cy.contains('teste3@gmail.com').parent()
      .find('[data-testid="editButton"]').click()

    cy.contains('Alterar Usuário')
      .should('be.visible')
      
    cy.get('#nome').type('{selectall}{backspace}nome editado')

    cy.contains('Salvar').click()

    cy.get('.Toastify__toast-body')
    .should('have.text', 'usuário editado com successo!')
    
    cy.get('.Toastify__toast-body').click()
      .should('not.exist')

  })

  it('Não encontrar usuário especifico', () => {

  })

  it('Modificar senha de um usuário', () => {

  })

  it('Logar com o usuário modificado', () => {

  })

  it('Logar e alterar os dados do perfil do usuário modificado', () => {

  })
})