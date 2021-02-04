import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000);
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function() {
        homepage_PO.visitHomepage();
        cy.wait(100);
        homepage_PO.clickOn_ContactUs_Button();
        //cy.pause();
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Add test comment", "h1", "Thank You for your Message!");
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are mandatory", () => {
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, " ", "Add test comment", "body", "Error: Invalid email address");
    })
})