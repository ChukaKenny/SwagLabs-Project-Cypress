 /// <reference types="Cypress"/>
import swaglabsLoginPage from "./Object Repository/Loginpage"
import swaglabsHomePage from "./Object Repository/HomePage"
const swaglabLoginPage = new swaglabsLoginPage
const swaglabHomePage = new swaglabsHomePage
let username = "standard_user"
let password = "secret_sauce" 

 describe("Alphabetical Order",()=>{
    
        it("Verify that the items are sorted by Name ( A -> Z )",()=>{

            cy.visit("https://www.saucedemo.com/")
            cy.wait(4000)
            swaglabLoginPage.userName().type(username)
            swaglabLoginPage.password().type(password)
            swaglabLoginPage.loginButton().click()
            swaglabHomePage.homepageHeader().should("be.visible")
            swaglabHomePage.AtoZOption().should("be.selected")
            swaglabHomePage.verifyA_Z()

            cy.then(()=>{
                swaglabHomePage.filterBox().select("Name (Z to A)")
                swaglabHomePage.ZtoAOption().should("be.selected")
                swaglabHomePage.verifyZ_A()
            })
                


        }) 


    }) 



     
