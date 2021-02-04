/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(function() {
        //cy.viewport(750, 750);
        //cy.fixture("userDetails").as("user");
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(itemText) {
            console.log("Clicked on the following item: " + itemText.text())
        });
        // cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joeemail@joeemail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Add some comments here");
        cy.get("button[title = 'Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.contains('Your enquiry has been successfully sent to the store owner!');
        cy.log("Test has completed!");
    })
})