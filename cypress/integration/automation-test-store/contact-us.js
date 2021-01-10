/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joeemail@joeemail.com");
        cy.get('#ContactUsFrm_enquiry').type("Add some comments here");
        cy.get('.col-md-6 > .btn').click()
        cy.contains('Your enquiry has been successfully sent to the store owner!');
    })
})