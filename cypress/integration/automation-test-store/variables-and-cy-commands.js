/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigated to specific product pages", () => {
        cy.visit("http://automationteststore.com/");
        // The following will fail - not recommended
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();

        // The following will pass - not recommended either
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();

        // Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
    });
})