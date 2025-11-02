import { ContactPage } from '../../pages/ContactPage';
import { HomePage } from '../../pages/HomePage';

describe('Automation In Testing - Contact Form Test', () => {
  const home = new HomePage();
  const contact = new ContactPage();

  it('Should submit contact form successfully', () => {
    home.visit();
        cy.fixture('contactData').then((data) => {

    home.goToContactForm();

    contact.fillContactForm((data) );
    contact.submitForm();
    contact.verifySuccessMessage();
        });
  });

});
