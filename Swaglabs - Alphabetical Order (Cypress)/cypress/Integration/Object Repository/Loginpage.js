  class swaglabsLoginPage  {

    visitUrl() {return cy.visit("https://www.saucedemo.com/")}

    userName() {return cy.get('[data-test="username"]')} 

    password() {return cy.get('[data-test="password"]')}

    loginButton() {return cy.get('[data-test="login-button"]')}

     }

     export default swaglabsLoginPage