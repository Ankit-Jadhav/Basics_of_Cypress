
/*
describe('Suit Name', () => 
{
   
    it('test1', () => {
      expect(true).to.equal(true)
    })

    it('test2', function() {
      expect(true).to.equal(true)
    })

}

  ) 
*/


describe('Suit Name', () => 
{
   
    it('test1- Positive test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM') 
      
    })

    // it('test2-Negative test', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.title().should('eq','OrangeHRM123') 
      
    // })



}) 