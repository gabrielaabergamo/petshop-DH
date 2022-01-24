import 'cypress-file-upload';

describe("forms", ()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:5050/trabalhe-conosco.html')
      })

      it("receives data", () =>{
        cy.get('[data-cy=inputNome]').type('Gabriela').should('have.value', 'Gabriela')
        cy.get('[data-cy=inputEmail]').type('gabriela@email.com').should('have.value', 'gabriela@email.com')
        cy.get('[data-cy=inputTel]').type('1123456789').should('have.value', '1123456789')
        cy.get('[data-cy=inputDescri]').type('oiii').should('have.value', 'oiii')

        cy.get('[data-cy=inputNasc]').type('1999-04-07').should('have.value', '1999-04-07')

        cy.get('[data-cy=inputCurriculo]').attachFile('surprise.png')

        cy.get('[data-cy=selectCarga]').select('Freelancer')

        cy.get('[data-cy=checkCafe]').not('[disabled]').check().should('be.checked')
        
        cy.get('[data-cy=botaoEnviarForm]').click()

        cy.get('[data-cy=mensagemFormEnviado]').should('have.text', 'form enviado!')
      })
})