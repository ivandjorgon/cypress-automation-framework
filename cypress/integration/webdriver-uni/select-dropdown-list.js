/// <reference types="Cypress" />

describe("Interact with dropdown lists", () => {
    it("Select specific values via select dropdown list", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    })

})