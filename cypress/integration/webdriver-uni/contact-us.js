/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function() {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.visit("http://www.webdriveruniversity.com")
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us > .thumbnail').click({force: true})
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("Add some comments")
        // cy.get('[type="submit"]').click()
        // cy.get('#contact_reply > h1').should('have.text', 'Thank You for your Message!')
        // or cy.get('h1').should('have.text', 'Thank You for your Message!')
        // cy.contains("Thank You for your Message!")
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "Add test comment", 'h1', 'Thank You for your Message!');
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are mandatory", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.visit("http://www.webdriveruniversity.com")
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("Add some comments")
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')  
        // cy.contains("Error: all fields are required") 
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "Add test comment", 'body', 'Error: Invalid email address');
    })
})