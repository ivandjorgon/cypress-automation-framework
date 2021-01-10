/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us > .thumbnail').click({force: true})
        cy.get('[name="first_name"]').type("Ivan")
        cy.get('[name="last_name"]').type("Djorgon")
        cy.get('[name="email"]').type("testemail@testemail.com")
        cy.get('textarea.feedback-input').type("Add some comments")
        cy.get('[type="submit"]').click()
        cy.contains("Thank You for your Message!")
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are mandatory", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Ivan")
        cy.get('[name="email"]').type("testemail@testemail.com")
        cy.get('textarea.feedback-input').type("Add some comments")
        cy.get('[type="submit"]').click()
        cy.contains("Error: all fields are required")
    })
})