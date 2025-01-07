
describe("Handling Alerts" , () => {


it("JS Alert", () => { 

    cy.visit("https://demo.automationtesting.in/Alerts.html")

    //1) JS Alert : It will have some text and  an OK button.
    cy.get(".btn.btn-danger").click()

    cy.on("window:alert", (t)=>{                          //"window:alert" --cypress event from cypress catalog.
        expect(t).to.contains("I am an alert box!") 
       //alert window automatically closed by cypress

    })
})

it("JS Confirm Alert OK", () => { 

    cy.visit("https://demo.automationtesting.in/Alerts.html")

    //2) JS Confirm Alert : It will have some text with "OK" and "Cancel" button.
    cy.get(".analystic[href='#CancelTab']").click()

    cy.get(".btn.btn-primary").click()

    cy.on("window:confirm", (t)=>{                          //"window:confirm" --cypress event from cypress catalog for alert confirmation.
        expect(t).to.contains("Press a Button !") 
       //alert window automatically closed by pressing OK Button.

       cy.get("#demo").should("have.text","You pressed Ok");

    })
})

it("JS Confirm Alert Cancel", () => { 

    cy.visit("https://demo.automationtesting.in/Alerts.html")

    //2) JS Confirm Alert : It will have some text with "OK" and "Cancel" button.
    cy.get(".analystic[href='#CancelTab']").click()

    cy.get(".btn.btn-primary").click()

    cy.on("window:confirm", (t)=>{                          //"window:confirm" --cypress event from cypress catalog for alert confirmation.
        expect(t).to.contains("Press a Button !") 
       //alert window automatically closed by pressing CANCEL Button.
    })
       cy.on("window:confirm", () => false);   //Cypress will close window using CANCEL button.

       cy.get("#demo").should("have.text","You Pressed Cancel");


})

it("JS Prompt Alert OK", () => { 

    cy.visit("https://demo.automationtesting.in/Alerts.html")

    //3) JS Prompt Alert : It will have some text with text box along with OK button.

    cy.get(".analystic[href='#Textbox']").click();
   
    //Here we have to take control on alert before opening the prompt alert window. 
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Welcome');

        cy.get(".btn.btn-info").click();
        //Cypress will automatically close prompted alert -- it will use OK button --by default
       // cy.on("window:prompt", () => false);   //Cypress will close window using CANCEL button. not working for now.
        cy.get("#demo1").should("have.text","Hello Welcome How are you today");
        
    })
})

it("Authenticated Alert", () => { 
    
    //4) Auth Alert : Need to pass ID and Password.
    // Approach 1
    /* cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                                {
                                                                   username: "admin",
                                                                   password: "admin"
                                                                }
                                                             });

    cy.get("div[class='example'] p").should("have.contain", "Congratulations");  
    */
    //Approach 2 : pass username and password in the url only.
   // https://admin:admin@the-internet.herokuapp.com/basic_auth"

   cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
   cy.get("div[class='example'] p").should("have.contain", "Congratulations");   

})


})