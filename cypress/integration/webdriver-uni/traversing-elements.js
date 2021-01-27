/// <reference types="Cypress" />

describe("Traversing DOM elements in Cypress", () => {

    beforeEach(function() {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
    })

    after(() => {
        // Runs once after all tests in the block
        cy.visit("http://www.webdriveruniversity.com")
    })

    it("children() to get the children of DOM elements", () => {
        
    })
})