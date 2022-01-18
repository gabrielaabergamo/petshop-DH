import 'cypress-file-upload';

describe("forms", ()=>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://127.0.0.1:5500/trabalhe-conosco.html')
      })

      it("receives data", () =>{
        cy.get('#nome-completo').type('Gabriela').should('have.value', 'Gabriela')
        cy.get('#email').type('gabriela@email.com').should('have.value', 'gabriela@email.com')
        cy.get('#telefone').type('1123456789').should('have.value', '1123456789')
        cy.get('#descricao').type('oiii').should('have.value', 'oiii')

        cy.get('#data-nascimento').type('1999-04-07').should('have.value', '1999-04-07')

        cy.get('#curriculo').attachFile('surprise.png')

        cy.get('.trab-form__select').select('Freelancer')

        cy.get('.check [id="cafe"]').not('[disabled]').check().should('be.checked')
        
        
      })
})