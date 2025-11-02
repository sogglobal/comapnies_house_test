export class HomePage {
  visit() {
    cy.visit('/');
  }
verifyLoaded() {
    cy.contains('Welcome to Shady Meadows').should('be.visible');
  }
  goToContactForm() {
    cy.xpath("//a[@class='nav-link'][normalize-space()='Contact']").click();
  }

}
