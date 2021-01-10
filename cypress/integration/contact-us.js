/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us > .thumbnail').click()
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are mandatory", () => {
        //cypress code
    })
})