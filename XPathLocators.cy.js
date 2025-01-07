
describe('XPathLocators', () =>{

    it('No. of Product', () =>{
        cy.visit("https://www.indiamart.com/")
        
        cy.xpath("//div[@id='recent_item_widget']//div[@class='prswdgt']//div").should('have.length', 10)

        //In this test case we have used india mart site and checked number of product present in that using a relative xpath. 

    })

    it('Chained X path', () =>{
        cy.visit("https://www.indiamart.com/")
        
        cy.xpath("//div[@id='recent_item_widget']//div[@class='prswdgt']").xpath("div").should('have.length', 10)

        
    })

})