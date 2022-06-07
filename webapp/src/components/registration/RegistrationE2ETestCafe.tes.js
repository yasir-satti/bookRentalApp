import { Selector } from 'testcafe';
// import fixture from "testcafe";

fixture`Getting Started`.page`http://localhost:3000`;

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

const firstNameSelector = Selector('#formFirstName');
const middletNamesSelector = Selector('#formMiddleNames');
const surnameSelector = Selector('#formSurname');
const emailSelector = Selector('#formEmail');
const retypeEmailSelector = Selector('#formRetypeEmail');
const address1Selector = Selector('#Address1');
const address2Selector = Selector('#Address2');
const cityTownSelector = Selector('#CityTown');
const postcodeSelector = Selector('#Postcode');
const passwordSelector = Selector('#formPassword');
const retypePasswordSelector = Selector('#formRetypePassword');

const pressRegisterSelector = Selector(`[data-testid="pressRegister"]`);

// test("Validates First name input", async (t) => {
//   await t
//     .typeText(firstNameSelector, testData.firstNameInput)
//     .expect(firstNameSelector.value)
//     .eql(testData.firstNameInput);
// });

// test("Validates middle name input", async (t) => {
//   await t
//     .typeText(middletNamesSelector, testData.middleNamesInput)
//     .expect(middletNamesSelector.value)
//     .eql(testData.middleNamesInput);
// });

// test("Validates surname input", async (t) => {
//   await t
//     .typeText(surnameSelector, testData.surnameInput)
//     .expect(surnameSelector.value)
//     .eql(testData.surnameInput);
// });

// test("Validates email input", async (t) => {
//   await t
//     .typeText(emailSelector, testData.emailInput)
//     .expect(emailSelector.value)
//     .eql(testData.emailInput);
// });

// test("Validates retype email input", async (t) => {
//   await t
//     .typeText(retypeEmailSelector, testData.retypeEmailInput)
//     .expect(retypeEmailSelector.value)
//     .eql(testData.retypeEmailInput);
// });

// test("Validates address 1 input", async (t) => {
//   await t
//     .typeText(address1Selector, testData.address1Input)
//     .expect(address1Selector.value)
//     .eql(testData.address1Input);
// });

// test("Validates address 2 input", async (t) => {
//   await t
//     .typeText(address2Selector, testData.address2Input)
//     .expect(address2Selector.value)
//     .eql(testData.address2Input);
// });

// test("Validates cityTown input", async (t) => {
//   await t
//     .typeText(cityTownSelector, testData.cityTownInput)
//     .expect(cityTownSelector.value)
//     .eql(testData.cityTownInput);
// });

// test("Validates postcode input", async (t) => {
//   await t
//     .typeText(postcodeSelector, testData.postcodeInput)
//     .expect(postcodeSelector.value)
//     .eql(testData.postcodeInput);
// });

// test("Validates password input", async (t) => {
//   await t
//     .typeText(passwordSelector, testData.passwordInput)
//     .expect(passwordSelector.value)
//     .eql(testData.passwordInput);
// });

// test("Validates retype password input", async (t) => {
//   await t
//     .typeText(retypePasswordSelector, testData.retypePasswordInput)
//     .expect(retypePasswordSelector.value)
//     .eql(testData.retypePasswordInput);
// });

test('Validate Submit registration data', async (t) => {
	await t
		.typeText(firstNameSelector, testData.firstNameInput)
		.typeText(middletNamesSelector, testData.middleNamesInput)
		.typeText(surnameSelector, testData.surnameInput)
		.typeText(emailSelector, testData.emailInput)
		.typeText(retypeEmailSelector, testData.retypeEmailInput)
		.typeText(address1Selector, testData.address1Input)
		.typeText(address2Selector, testData.address2Input)
		.typeText(cityTownSelector, testData.cityTownInput)
		.typeText(postcodeSelector, testData.postcodeInput)
		.typeText(passwordSelector, testData.passwordInput)
		.typeText(retypePasswordSelector, testData.retypePasswordInput)
		.click(pressRegisterSelector);
});
// // .expect(firstNameInputNameExists).ok()
