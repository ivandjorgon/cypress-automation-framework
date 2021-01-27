/// <reference types="Cypress" />

describe("Traversing DOM elements in Cypress", () => {

    beforeEach(function() {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
    })

    //after(() => {
        // Runs once after all tests in the block
        //cy.visit("http://www.webdriveruniversity.com")
    //})

    it("children() to get the children of DOM elements", () => {
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
    })

    it("closest() to validate the closest ancestor DOM element", () => {
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
    })

    it("eq() to retrieve a specific element based on index", () => {
        cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk')
        cy.get('.traversal-drinks-list > *').eq(4).should('contain', 'Sugar')
    })

    it.only("filter() to retrieve DOM elements that match a specific selector", () => {
        cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1')
    })
})