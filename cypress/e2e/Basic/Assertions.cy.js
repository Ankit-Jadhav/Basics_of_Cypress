describe("Assertions Demo", ()=> {

it ("Implicit Assertions", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //Implicit Assertions - should, and
    cy.url().should('include', 'orangehrmlive.com')
    cy.url().should('contain', 'orangehrmlive')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('not.contain', 'abc')

    // more short form we can use
    //one way
    cy.url().should('include', 'orangehrmlive.com')
    .should('contain', 'orangehrmlive')
    .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //other way
    cy.url().should('include', 'orangehrmlive.com')
    .and('contain', 'orangehrmlive')
    .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

// title always define under <head> tag only. also check with ctrl F - title
    cy.title().should('include','Orange')
    .and('contain','HRM')
    .and('eq','OrangeHRM')


    //check logo is present or not.
    cy.get('.orangehrm-login-branding > img').should('be.visible')  //this logo "cy.get('.orangehrm-login-branding > img')" i have used from cypress dashboard
    .and('exist') 

    //finding no. of links present on the page using xpath
    cy.xpath("//a").should('have.length','5')

    //checking value should be equal.
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Username']").should('have.value', 'Admin')  //value

})
it ("Explicit Assertions", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()


    //BDD approach
    let expName= "grayRajiv sebastianPatil";
    cy.get(".oxd-userdropdown-tab").then(  (x) =>{
        let actName=x.text()
        expect(actName).to.equal(expName)
        expect(actName).to.equal(expName)

        //go to offical document of cypress for BDD and TDD assertion

        // TDD approach
        assert.equal(actName,expName)
        assert.notequal(actName,expName)



    })

    
    
})
})
