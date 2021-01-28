/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {

    beforeEach(function() {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true })
    })

    after(() => {
        // Runs once after all tests in the block
        cy.visit("http://www.webdriveruniversity.com")
    })

    it("Calculate and assert the total age of all users", () => {
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            
        })
    })

})