/// <reference types="cypress" />

describe("Iterate over elements", () => {

    beforeEach(function() {
        cy.visit("http://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    it("Log information of all hair care products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });
    });

    it("Add Curls to straight Shampoo product to basket", () => {
        cy.selectProduct('Curls to straight Shampoo');
    });

    it("Add Seaweed Conditioner product to basket", () => {
        cy.selectProduct('Seaweed Conditioner');
    });

    it("Add Eau Parfumee au The Vert Shampoo product to basket", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
})