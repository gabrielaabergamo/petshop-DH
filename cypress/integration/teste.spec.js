describe("header", () =>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://127.0.0.1:5050/')
      })
    it('has 4 links in nav', () => {
        cy.get('[data-cy=nav]').children().should('have.length', 4)
        cy.get('[data-cy=navLink]').first().should('have.text', 'Home')
    })
    it('has one logo', ()=>{
        cy.get('[data-cy=logo]').should('have.length', 1)
    })
    it('changes to Contato page when clicking the Contato button', () =>{
        cy.get('[data-cy=nav]').contains('Contato').click()
        cy.location('pathname').should('include', 'contato.html')
    })
})

