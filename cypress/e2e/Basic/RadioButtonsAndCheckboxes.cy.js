
describe("Check UI Elements",() => {

    it("Checking Radio Buttons", () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")

        //visibility of radio buttons -- Single Checkbox check only at a time.
        //Internet Explorer Checkbox
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(3)").should('be.visible')

        //Mozilla Checkbox
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(5)").should('be.visible')

        //Selecting radio buttons
        //selecting Internet Explorer checkbox so Mozilla bydefault unchecked
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(3)").check().should('be.checked')
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(5)").should('not.be.checked')

        //selecting Mozilla checkbox so Mozilla bydefault unchecked
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(5)").check().should('be.checked')
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > blockquote:nth-child(33) > form:nth-child(1) > input:nth-child(3)").should('not.be.checked')
    
    
        //Multiple Checkbox Select
        //Visibility of element
        cy.get("input[value='red']").should("be.visible")

        //Check the element
        cy.get("input[value='red']").check().should("be.checked")

        //Unselecting Checkbox
        cy.get("input[value='red']").uncheck().should("not.be.checked")


        //Selecting all checkbox 
        //for selecting all checkboxes - select and loctor which is commmon in all.

       cy.get("input[name='color']").check().should("be.checked")

       //uncheck
       cy.get("input[name='color']").uncheck().should("not.be.checked")

       //I am using same locator which is used for checking all checbox but in that i want to check only first checkbox
       cy.get("input[name='color']").first().check().should("be.checked")
       cy.get("input[name='color']").last().check().should("be.checked")




    





        

        






    })

})