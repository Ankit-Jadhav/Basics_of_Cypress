


describe('CSSLocators', () => {

    it("cssLocators", () =>{
        cy.visit("https://www.wikipedia.org/")

        
        cy.get("#searchInput").type("India")   //Using ID -- tag name is optional
        cy.get("[type='submit']").click()      //Using Attribute --tag is optional
        cy.get(".mw-page-title-main").contains("India")    //verifying the title using class // assertion
        
        //for class attribute combo check video 4th 
        



    })

})