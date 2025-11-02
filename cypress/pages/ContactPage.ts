export class ContactPage {

  private nameInput = '#name';
  private emailInput = '#email';
  private phoneInput = '#phone';
  private subjectInput = '#subject';
  private messageTextArea = '#description';
  private submitButton = "//button[normalize-space()='Submit']";
  private successMessage = "(//*[@class='h4 mb-4'])[2]";


  fillContactForm(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) {
    cy.get(this.nameInput).type(data.name);
    cy.get(this.emailInput).type(data.email);
    cy.get(this.phoneInput).type(data.phone);
    cy.get(this.subjectInput).type(data.subject);
    cy.get(this.messageTextArea).type(data.message);
  }

  submitForm() {
    cy.xpath(this.submitButton).click();
  }

  verifySuccessMessage() {
    cy.xpath(this.successMessage)
      .should('contain.text', 'Thanks for getting in touch');
  }
}
