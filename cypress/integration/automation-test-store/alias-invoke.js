/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("http://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it.only("Validate number of thumbnails", () => {
        cy.visit("http://automationteststore.com/");
        
        cy.get(".thumbnail").as('numProducts')
        cy.get('@numProducts').should('have.length', 16)
        cy.get('@numProducts').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
})