describe("Handle Dropdowns", () => {

    it("Dropdown with select", () => { 
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select("Italy").should("have.value","Italy")

    })

    it.skip("Dropdown without select", () => { 

        //here dropdown is type and enter or type and click. so for verifying have.text is use instead of have.value
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type("{enter}")
        cy.get("#select2-billing_country-container").should("have.text","Italy")

    })
    it.skip("Auto Suggested Dropdown", () => { 

        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        cy.get('.suggestion-title').contains("Delhi University").click()   //locator is common in all the suggestion
       })

       it.only("Dynamic Dropdown", () => { 

        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("github")
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length',13)

        cy.get("div.wM6W7d>span").each( ($el, index, $list) => {
            if($el.text() =='github login')
            {
                cy.wrap($el).click()
            }
        
        })       //locator is made unique , check video for this.
        //use "each" from cypress doc . refer video
       //JQuery function 
         cy.get('#APjFqb').should('have.value', 'github login')
        
       })




})