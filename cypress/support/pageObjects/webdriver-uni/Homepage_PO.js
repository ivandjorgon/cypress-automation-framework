class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000});
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    }

    clickOn_FileUpload_Button() {
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force:true });
    }
}
export default HomePage_PO;