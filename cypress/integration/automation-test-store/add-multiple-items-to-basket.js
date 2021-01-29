import AutoStore_HomePage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    const autostore_homepage_PO = new AutoStore_HomePage_PO();

    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        autostore_homepage_PO.visitAutoStoreHomepage();
        autostore_homepage_PO.clickOn_HairCare_Link();
    });

    it("Add specific items to basket", () => {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element);
        });
        cy.get('.dropdown-toggle > .fa').click();
    });
})