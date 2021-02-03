/// <reference types="Cypress" />

describe("Test File Upload via webdriveruni", () => {
    it("Upload a png file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture("idjorgon.png", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "idjorgon.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click();
    })

    it("Upload a csv file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture("file_csv_test.csv", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "file_csv_test.csv",
                    mimeType: "text/csv"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click();
    })

    it("Upload no file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get("#submit-button").click();
    })
})