import 'cypress-file-upload';

context('Form: error handling', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5050/trabalhe-conosco.html')
      })

    describe('form submitted without data', ()=>{
        it('doesnt allow submitting without data', ()=>{
            cy.get('[data-cy=botaoEnviarForm]').click()

            cy.get('[data-cy=mensagemErro]').should('have.text', 'O campo nome completo deve ter no mínimo 6 caracteres.Preencha o campo e-mail corretamente.O campo telefone precisa ter no mínimo 10 digitos.')
        })
    })

    describe('form submitted with an invalid name', ()=>{
        it('doesnt allow submitting without a name', ()=>{
            cy.get('[data-cy=inputEmail]').type('gabriela@email.com').should('have.value', 'gabriela@email.com')
            cy.get('[data-cy=inputTel]').type('1123456789').should('have.value', '1123456789')
            cy.get('[data-cy=inputDescri]').type('oiii').should('have.value', 'oiii')

            cy.get('[data-cy=inputNasc]').type('1999-04-07').should('have.value', '1999-04-07')

            cy.get('[data-cy=inputCurriculo]').attachFile('surprise.png')

            cy.get('[data-cy=selectCarga]').select('Freelancer')

            cy.get('[data-cy=checkCafe]').not('[disabled]').check().should('be.checked')
            
            cy.get('[data-cy=botaoEnviarForm]').click()

            cy.get('[data-cy=mensagemErro]').should('have.text', 'O campo nome completo deve ter no mínimo 6 caracteres.')
        })

        it('doesnt allow a name with less than 6 charactes', ()=>{
            cy.get('[data-cy=inputNome]').type('a').should('have.value', 'a')
            cy.get('[data-cy=inputEmail]').type('gabriela@email.com').should('have.value', 'gabriela@email.com')
            cy.get('[data-cy=inputTel]').type('1123456789').should('have.value', '1123456789')
            cy.get('[data-cy=inputDescri]').type('oiii').should('have.value', 'oiii')

            cy.get('[data-cy=inputNasc]').type('1999-04-07').should('have.value', '1999-04-07')

            cy.get('[data-cy=inputCurriculo]').attachFile('surprise.png')

            cy.get('[data-cy=selectCarga]').select('Freelancer')

            cy.get('[data-cy=checkCafe]').not('[disabled]').check().should('be.checked')
            
            cy.get('[data-cy=botaoEnviarForm]').click()

            cy.get('[data-cy=mensagemErro]').should('have.text', 'O campo nome completo deve ter no mínimo 6 caracteres.')
        })
    })

    describe('form submitted with invalid email', ()=>{
        it('doesnt allow submitting wihtout an email', ()=>{
            cy.get('[data-cy=inputNome]').type('Gabriela').should('have.value', 'Gabriela')
            cy.get('[data-cy=inputTel]').type('1123456789').should('have.value', '1123456789')
            cy.get('[data-cy=inputDescri]').type('oiii').should('have.value', 'oiii')

            cy.get('[data-cy=inputNasc]').type('1999-04-07').should('have.value', '1999-04-07')

            cy.get('[data-cy=inputCurriculo]').attachFile('surprise.png')

            cy.get('[data-cy=selectCarga]').select('Freelancer')

            cy.get('[data-cy=checkCafe]').not('[disabled]').check().should('be.checked')
            
            cy.get('[data-cy=botaoEnviarForm]').click()

            cy.get('[data-cy=mensagemErro]').should('have.text', 'Preencha o campo e-mail corretamente.')
        })

        it('doesnt allow submitting with invalid email [without @]', ()=>{
            cy.get('[data-cy=inputNome]').type('Gabriela').should('have.value', 'Gabriela')
            cy.get('[data-cy=inputEmail]').type('gabrielaemail.com').should('have.value', 'gabrielaemail.com')
            cy.get('[data-cy=inputTel]').type('1123456789').should('have.value', '1123456789')
            cy.get('[data-cy=inputDescri]').type('oiii').should('have.value', 'oiii')

            cy.get('[data-cy=inputNasc]').type('1999-04-07').should('have.value', '1999-04-07')

            cy.get('[data-cy=inputCurriculo]').attachFile('surprise.png')

            cy.get('[data-cy=selectCarga]').select('Freelancer')

            cy.get('[data-cy=checkCafe]').not('[disabled]').check().should('be.checked')
            
            cy.get('[data-cy=botaoEnviarForm]').click()

            cy.get('[data-cy=mensagemErro]').should('have.text', 'Preencha o campo e-mail corretamente.')
        })
    })

    describe('form submitted with invalid telephone number', ()=>{
        it('doesnt allow submitting without a telephone number', ()=>{
            cy.get('[data-cy=inputNome]').type('Gabriela').should('have.value', 'Gabriela')
            cy.get('[data-cy=inputEmail]').type('gabriela@email.com').should('have.value', 'gabriela@email.com')
            cy.get('[data-cy=inputDescri]').type('oiii').should('have.value', 'oiii')

            cy.get('[data-cy=inputNasc]').type('1999-04-07').should('have.value', '1999-04-07')

            cy.get('[data-cy=inputCurriculo]').attachFile('surprise.png')

            cy.get('[data-cy=selectCarga]').select('Freelancer')

            cy.get('[data-cy=checkCafe]').not('[disabled]').check().should('be.checked')
            
            cy.get('[data-cy=botaoEnviarForm]').click()

            cy.get('[data-cy=mensagemErro]').should('have.text', 'O campo telefone precisa ter no mínimo 10 digitos.')
        })

        it('doesnt allow submitting with an invalid telephone number', ()=>{
            cy.get('[data-cy=inputNome]').type('Gabriela').should('have.value', 'Gabriela')
            cy.get('[data-cy=inputEmail]').type('gabriela@email.com').should('have.value', 'gabriela@email.com')
            cy.get('[data-cy=inputTel]').type('11234569').should('have.value', '11234569')
            cy.get('[data-cy=inputDescri]').type('oiii').should('have.value', 'oiii')

            cy.get('[data-cy=inputNasc]').type('1999-04-07').should('have.value', '1999-04-07')

            cy.get('[data-cy=inputCurriculo]').attachFile('surprise.png')

            cy.get('[data-cy=selectCarga]').select('Freelancer')

            cy.get('[data-cy=checkCafe]').not('[disabled]').check().should('be.checked')
            
            cy.get('[data-cy=botaoEnviarForm]').click()

            cy.get('[data-cy=mensagemErro]').should('have.text', 'O campo telefone precisa ter no mínimo 10 digitos.')
        })
    })
})

