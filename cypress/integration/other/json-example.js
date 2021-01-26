/// <reference types="Cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]; 

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"]); //Tim
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key2); //Jones

        cy.log(exampleArrayOfValues[0]); //Sophie
        cy.log(exampleArrayOfValues[1]); //Rose
        cy.log(exampleArrayOfValues[2]); //Howard

        for (let val of exampleArrayOfValues) {
            cy.log(val);
        }

        cy.log(users.lastName);
        cy.log(users.Students[0].lastName);
        cy.log(users.Students[1].lastName);
    })
})