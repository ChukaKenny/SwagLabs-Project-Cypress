class swaglabsHomePage  {

    homepageHeader() {return cy.get('[data-test="title"]')}

    filterBox() {return cy.get('[data-test="product-sort-container"]')} 

    AtoZOption() {return cy.get('[data-test="product-sort-container"] option:contains("Name (A to Z)")')}

    verifyA_Z(){
        return cy.get('[data-test|="inventory-item-name"]').each(($el, index) => {
            if (index === 0) {
                cy.wrap($el).should("have.text","Sauce Labs Backpack")
                .then(()=>{cy.log("Order Format is A to Z")})
                return
            }
        })
    }

    verifyZ_A() {
        return cy.get('[data-test="product-sort-container"] option:contains("Name (Z to A)")')
    }

    allOptions_2(){
        return cy.get('[data-test|="inventory-item-name"]').each(($el, index) => {
            if (index === 0) {
                cy.wrap($el).should("have.text","Test.allTheThings() T-Shirt (Red)")
                .then(()=>{cy.log("Order Format is Z to A")})
                return
             };
         })    
    }

    }
    

     export default swaglabsHomePage