describe("content", () =>{
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://127.0.0.1:5050/')
      })
      it("has the correct text", ()=>{
          cy.get('[data-cy=contentTitle]').should('have.text', 'Sed ut perspiciatis unde iste natus error sit \n                    voluptatem accusantium doloremque \n                    laudantium, ')
      })
})