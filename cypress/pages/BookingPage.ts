
export class BookingPage {


  private suiteButton = "//a[@class='btn btn-primary btn-lg']";
  private bookSuiteButton = "//div[3]//div[1]//div[3]//a[1]";
  private todayButton = "//button[normalize-space()='Today']";
  private reserveButton = "//button[@id='doReservation']";
  private firstNameInput = "//*[@name='firstname']";
  private lastNameInput = "//*[@name='lastname']";
  private emailInput = "//*[@name='email']";
  private phoneInput = "//*[@name='phone']";
  private reserveNowButton = "//button[normalize-space()='Reserve Now']";
  private confirmationTitle = "//h2[@class='card-title fs-4 fw-bold mb-3']";

 openSuiteBooking() {
    cy.xpath(this.suiteButton).click();
    cy.xpath(this.bookSuiteButton).click();
  }

  selectTodayDates() {
    cy.xpath(this.todayButton).click();
    cy.xpath(this.reserveButton).click();
  }

 fillBookingDetails(data: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  }) {
    cy.xpath(this.firstNameInput).type(data.firstname);
    cy.xpath(this.lastNameInput).type(data.lastname);
    cy.xpath(this.emailInput).type(data.email);
    cy.xpath(this.phoneInput).type(data.phone);
  }

  submitBooking() {
    cy.xpath(this.reserveNowButton).click();
  }

  verifyBookingConfirmation() {
    cy.xpath(this.confirmationTitle).should('contain.text', 'Booking Confirmed');
  }
}
