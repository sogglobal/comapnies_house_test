test scripts are under e2e/cypress
pages are under pages/
test data is stored in Json files under fixture/json files
we are reading the website using config file so that we dont hard code it 
page classes are holding the locators at the top and then reusable methods at the bottom
Test can be run using npx cypress open and then select the spec that you want to run.
