/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("http://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it("Validate number of thumbnails", () => {
        cy.visit("http://automationteststore.com/");    
        cy.get(".thumbnail").as('numProducts')
        cy.get('@numProducts').should('have.length', 16)
        cy.get('@numProducts').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("http://automationteststore.com/");    
        cy.get(".thumbnail").as('numProducts')
        // cy.get('@numProducts').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var totalPrice = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                totalPrice += Number(itemPrice[i]);
            }
            itemsTotal += totalPrice;
            cy.log("Non sale price items total: " + totalPrice);
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i]);
                saleItemsPrice += Number(saleItemPrice[i]);
            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale price items total: " + saleItemsPrice);
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal);
            expect(itemsTotal).to.equal(652.60);
        })
    });
})