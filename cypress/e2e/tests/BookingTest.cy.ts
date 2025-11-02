import { HomePage } from '../../pages/HomePage';
import { BookingPage } from '../../pages/BookingPage';

describe('Book Suite Room for Today', () => {
  const home = new HomePage();
  const booking = new BookingPage();

  it('should successfully book the Suite room for today', () => {
    cy.fixture('bookingData').then((data) => {
    home.visit();
    home.verifyLoaded();
    booking.openSuiteBooking();
    booking.selectTodayDates();
    booking.fillBookingDetails(data);
    booking.submitBooking();
    booking.verifyBookingConfirmation();
    });
  });
});
