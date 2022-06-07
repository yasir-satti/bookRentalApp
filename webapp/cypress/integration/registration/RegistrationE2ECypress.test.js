const baseUrl = 'http://localhost:3000';

describe('Registration form', () => {
	const testData = {
		firstNameInput: 'Yasir',
		middleNamesInput: 'Kamal M H',
		surnameInput: 'Satti',
		emailInput: 'ys@and.digial',
		retypeEmailInput: 'ys@and.digial',
		address1Input: 'Bloc',
		address2Input: '17 Marble Street',
		cityTownInput: 'Manchester',
		postcodeInput: 'M2 3WA',
		passwordInput: '12039eU2js92#',
		retypePasswordInput: '12039eU2js92#',
	};

	beforeEach(() => {
		cy.visit(baseUrl);
	});
	it('add a registration record', () => {
		cy.get('[data-testid="enterFirstName"]')
			.type(testData.firstNameInput)
			.get('[data-testid="enterMiddleNames"]')
			.type(testData.middleNamesInput)
			.get('[data-testid="enterSurname"')
			.type(testData.surnameInput)
			// .get('[data-testid="enterDateOfBirth"]').type('12/12/2000')
			.get('[data-testid="enterEmail"]')
			.type(testData.emailInput)
			.get('[data-testid="retypeEmail"]')
			.type(testData.retypeEmailInput)
			.get('[data-testid="enterAddress1"]')
			.type(testData.address1Input)
			.get('[data-testid="enterAddress2"]')
			.type(testData.address2Input)
			.get('[data-testid="enterCityTown"]')
			.type(testData.cityTownInput)
			.get('[data-testid="enterPostcode"]')
			.type(testData.postcodeInput)
			.get('[data-testid="enterPassword"]')
			.type(testData.passwordInput)
			.get('[data-testid="retypePassword"')
			.type(testData.retypePasswordInput)
			.get('[data-testid="pressRegister"]')
			.click();
	});
});
