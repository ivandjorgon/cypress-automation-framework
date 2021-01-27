/// <reference types="Cypress" />

describe("Test mouse actions", () => {

    before(function() {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it("Drag and drop a draggable item", () => {
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    })

    it("Double click an item", () => {
        cy.get('#double-click').dblclick()
    })

    it("Click and hold an item", () => {
        cy.get('#click-box').trigger('mousedown', {which :1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
        //click({release:true}).contains('Dont release me')
    })
})