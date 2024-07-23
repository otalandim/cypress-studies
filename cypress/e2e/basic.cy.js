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

    it('preenche os campos obrigatórios e envia o formulário, usando o prenchimento rápido do delay', () => {
      cy.get('#firstName')
        .should('be.visible')
        .type('Joao', { delay: 0})
        .should('have.value', 'Joao')
      cy.get('#lastName')
        .should('be.visible')
        .type('Landim', { delay: 0})
        .should('have.value', 'Landim')
      cy.get('#email')
        .should('be.visible')
        .type('joao@email.com', { delay: 0})
        .should('have.value', 'joao@email.com')
      cy.get('#open-text-area')
        .should('be.visible')
        .type('Otimo curso, testando a api do cypress com a funcionalidade de ignorar o time do cypress e fica parecendo que ele colou a informação', { delay: 0})
        .should('have.value', 'Otimo curso, testando a api do cypress com a funcionalidade de ignorar o time do cypress e fica parecendo que ele colou a informação')
      cy.contains('button', 'Enviar')
        .should('be.visible')
        .click()
      cy.get('.success')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
      cy.contains('button', 'Enviar')
        .should('be.visible')
        .click()
      cy.get('.error')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios')
    });

    it('campo só aceita se valor número, se digitar um valor não-numérico, seu valor continuará vazio.', () => {
      cy.get('#phone')
        .should('be.visible')
        .type('joao@email.com', { delay: 0})
        .should('have.value', '')
    });

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
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
      cy.get('#phone-checkbox')
        .should('be.visible')
        .check()
      cy.get('#open-text-area')
        .should('be.visible')
        .type('Otimo curso')
        .should('have.value', 'Otimo curso')
      cy.contains('button', 'Enviar')
        .should('be.visible')
        .click()
      cy.get('.error')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios')
    });
  });
 
})