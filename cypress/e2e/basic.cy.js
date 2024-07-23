describe('basic', () => {
  describe('Central de Atendimento ao Cliente TAT', () => {

    beforeEach(() => {
      cy.visit('../../src/index.html')
    });

    it('verifica o título da aplicação', () => {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', () => {
      cy.get('#firstName')
        .should('be.visible')
        .type('Joao')
        .should('have.value', 'Joao')
      cy.get('#lastName')
        .should('be.visible')
        .type('Landim')
        .should('have.value', 'Landim')
      cy.get('#email')
        .should('be.visible')
        .type('joao@email.com')
        .should('have.value', 'joao@email.com')
      cy.get('#open-text-area')
        .should('be.visible')
        .type('Otimo curso')
        .should('have.value', 'Otimo curso')
      cy.contains('button', 'Enviar')
        .should('be.visible')
        .click()
      cy.get('.success')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso')
    })
  });
 
})