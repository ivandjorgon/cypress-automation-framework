/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {

    beforeEach(function() {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true })
    })

    after(() => {
        // Runs once after all tests in the block
        cy.visit("http://www.webdriveruniversity.com")
    })

    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        let number = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for(i = 0; i < userDetails.length; i++) {
                if(Number(userDetails[i])) {
                    number += Number(userDetails[i]);
                }
                //cy.log(userDetails[i]);
            }
            cy.log("Found total age: " + number);
            expect(number).to.eq(322);
        })
    })
})