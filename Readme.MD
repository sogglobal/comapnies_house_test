Automation Suite Summary
This Cypress-based automation framework validates core booking workflows on https://automationintesting.online
following industry standards for scalable and maintainable test automation.

Key Highlights:
Built using Cypress 13.x with Page Object Model (POM) structure
Test scripts in cypress/e2e, reusable Page Classes in cypress/pages
Configurable base URL and environment via cypress.config.js (no hardcoding)
JSON-based test data under cypress/fixtures/json
Generates Mochawesome HTML reports for test results
Headless and interactive test execution supported

How to Run:
Install dependencies:
npm install
Run in UI mode:
npx cypress open
Run in headless CI mode (with reporting):
npm run test:ci

Technical Strengths:
Capability	Implementation
Framework	Cypress + POM structure
Data-Driven	JSON fixtures
Reporting	Mochawesome HTML
Config Handling	Centralized in cypress.config.js
CI Ready	Headless execution with auto-reporting

Structure (Key Folders)
/e2e/ – test specs
/pages/ – page objects (locators + reusable methods)
/fixtures/json/ – test data
/reports/ – generated HTML reports

Summary :
Test scripts are under e2e/cypress
pages are under pages/
test data is stored in Json files under fixture/json files
we are reading the website using config file so that we dont hard code it 
page classes are holding the locators at the top and then reusable methods at the bottom
Test can be run using npx cypress open and then select the spec that you want to run.
