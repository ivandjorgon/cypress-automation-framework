/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {

    beforeEach(function() {
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it("Check and validate option 1 checkbox", () => {
        // Option 1 check
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')

        // Option 2 check
        cy.get(':nth-child(3) > input').check().should('be.checked')
        // Option 4 check
        cy.get(':nth-child(7) > input').check().should('be.checked')
    })

    it("Uncheck and validate option 3 checkbox", () => {
        // Option 3 uncheck
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it("Check and validate multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
        cy.get("input[type='checkbox']").should('be.enabled')
    })
})