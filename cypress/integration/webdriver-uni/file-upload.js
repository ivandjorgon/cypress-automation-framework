import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import FileUpload_PO from '../..//support/pageObjects/webdriver-uni/Fileupload_PO'
/// <reference types="Cypress" />

describe("Test File Upload via webdriveruni", () => {
    const homepage_PO = new HomePage_PO();
    const fileupload_PO = new FileUpload_PO();
    
    beforeEach(function() {
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_FileUpload_Button();
    })

    it("Upload a png file....", () => {
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
        fileupload_PO.submitFile();
    })

    it("Upload a csv file....", () => {
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
        fileupload_PO.submitFile();
    })

    it("Upload a jpg file....", () => {
        cy.fixture("gallery8.jpg", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "gallery8.jpg",
                    mimeType: "image/jpg"
                },
                {
                    uploadType: "input"
                }
            )
        })
        fileupload_PO.submitFile();
    })

    it("Upload no file....", () => {
        fileupload_PO.submitFile();
    })
})