// import { By } from 'selenium-webdriver'
// import webdriver from 'selenium-webdriver'

const { waitFor } = require('@testing-library/react');

const { By, Builder } = require('selenium-webdriver');

const baseUrl = 'http://localhost:3000';

const driver = new Builder().forBrowser('chrome').build();

const testData = {
	firstNameInput: 'Yasir',
	middleNamesInput: 'Kamal M H',
	surnameInput: 'Satti',
	emailInput: 'y@and.digial',
	retypeEmailInput: 'y@and.digial',
	address1Input: 'Bloc',
	address2Input: '17 Marble Street',
	cityTownInput: 'Manchester',
	postcodeInput: 'M2 3WA',
	passwordInput: '12039eU2js92#',
	retypePasswordInput: '12039eU2js92#',
};

const firstNameSelector = 'formFirstName';
const middletNamesSelector = 'formMiddleNames';
const surnameSelector = 'formSurname';
const emailSelector = 'formEmail';
const retypeEmailSelector = 'formRetypeEmail';
const address1Selector = 'Address1';
const address2Selector = 'Address2';
const cityTownSelector = 'CityTown';
const postcodeSelector = 'Postcode';
const passwordSelector = 'formPassword';
const retypePasswordSelector = 'formRetypePassword';

const pressRegisterSelector = 'submit';

driver.navigate().to(baseUrl);

driver.findElement(By.id(firstNameSelector)).sendKeys(testData.firstNameInput);
driver
	.findElement(By.id(middletNamesSelector))
	.sendKeys(testData.middleNamesInput);
driver.findElement(By.id(surnameSelector)).sendKeys(testData.surnameInput);
driver.findElement(By.id(emailSelector)).sendKeys(testData.emailInput);
driver
	.findElement(By.id(retypeEmailSelector))
	.sendKeys(testData.retypeEmailInput);
driver.findElement(By.id(address1Selector)).sendKeys(testData.address1Input);
driver.findElement(By.id(address2Selector)).sendKeys(testData.address2Input);
driver.findElement(By.id(cityTownSelector)).sendKeys(testData.cityTownInput);
driver.findElement(By.id(postcodeSelector)).sendKeys(testData.postcodeInput);
driver.findElement(By.id(passwordSelector)).sendKeys(testData.passwordInput);
driver
	.findElement(By.id(retypePasswordSelector))
	.sendKeys(testData.retypePasswordInput);

waitFor(() => {
	driver.findElement(By.css(pressRegisterSelector)).click();
});

// describe('Registration form', () => {
// beforeAll(function (done) {
//   driver
//     .navigate()
//     .to(baseUrl)
//     .then(() => done());
// });

// it("Fill the registration form", function (done) {
//   // driver.findElement(By.xpath(`//*[@id="root"]/div/form/div/div/div/enterFirstName`)).sendKeys('Yasir');
//   driver.findElement(By.name("enterFirstName")).sendKeys("Yasir");
// });
// })
