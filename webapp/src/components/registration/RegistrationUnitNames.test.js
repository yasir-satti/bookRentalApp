import { render, fireEvent } from '@testing-library/react';
// import { debug } from 'webpack';
import App from '../app/App';

// const form = getByTestId("form");

describe('Names', () => {
	test('1. Page registration form fields should be empty when the page is first loaded', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emptyText = '';
		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		expect(firstNameText).toHaveValue(emptyText);
		expect(middleNamesText).toHaveValue(emptyText);
		expect(surNameText).toHaveValue(emptyText);
		// expect(dateOfBirthValue).toHaveValue('10/01/2022');
		expect(emailText).toHaveValue(emptyText);
		expect(retypeEmailText).toHaveValue(emptyText);
		expect(address1Text).toHaveValue(emptyText);
		expect(address2Text).toHaveValue(emptyText);
		expect(cityTownText).toHaveValue(emptyText);
		expect(postcodeText).toHaveValue(emptyText);
		expect(passwordText).toHaveValue(emptyText);
		expect(retypePasswordText).toHaveValue(emptyText);
	});

	test('2. Valid input data is entered', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: 'Yasir',
			middleNamesInput: 'Kamal M H',
			surnameInput: 'Satti',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['middleNamesInput'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['surnameInput'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(firstNameText).toHaveValue(testData['firstNameInput']);
		expect(middleNamesText).toHaveValue(testData['middleNamesInput']);
		expect(surNameText).toHaveValue(testData['surnameInput']);
		expect(emailText).toHaveValue(testData['emailInput']);
		expect(address1Text).toHaveValue(testData['address1Input']);
		expect(address2Text).toHaveValue(testData['address2Input']);
		expect(cityTownText).toHaveValue(testData['cityTownInput']);
		expect(postcodeText).toHaveValue(testData['postcodeInput']);
		expect(passwordText).toHaveValue(testData['passwordInput']);
		expect(retypePasswordText).toHaveValue(testData['retypePasswordInput']);
	});

	test('3. Empty first name input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: '',
			middleNamesInput: 'Kamal M H',
			surnameInput: 'Satti',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['middleNamesInput'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['surnameInput'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(firstNameText).toHaveValue(testData['firstNameInput']);
		expect(middleNamesText).toHaveValue(testData['middleNamesInput']);
		expect(surNameText).toHaveValue(testData['surnameInput']);
		expect(emailText).toHaveValue(testData['emailInput']);
		expect(address1Text).toHaveValue(testData['address1Input']);
		expect(address2Text).toHaveValue(testData['address2Input']);
		expect(cityTownText).toHaveValue(testData['cityTownInput']);
		expect(postcodeText).toHaveValue(testData['postcodeInput']);
		expect(passwordText).toHaveValue(testData['passwordInput']);
		expect(retypePasswordText).toHaveValue(testData['retypePasswordInput']);
	});

	test('4. First name input is not more than 30 char form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const firstNameText = getByTestId('enterFirstName');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			nameGreaterThan30Char: 'JohnPeterJackHughDouglasYasirEarl',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['nameGreaterThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validFirstNameFeedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	test('5. Valid first name input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const firstNameText = getByTestId('enterFirstName');

		const validFirstNameFeedback = getByTestId('validFirstNameFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validFirstName: 'John',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['validFirstName'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validFirstNameFeedback).toHaveTextContent('');
	});

	test('6. Middle name input is empty form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: 'Yasir',
			validMiddleName: '',
			surnameInput: 'Satti',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['validMiddleName'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['surnameInput'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(middleNamesText).toHaveValue(testData['validMiddleName']);
	});

	test('7. Middle name input is not more than 30 char form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validMiddleNameFeedback = getByTestId('validMiddleNameFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: 'Yasir',
			validMiddleName: 'JohnPeterJackHughDouglasYasirEarl',
			surnameInput: 'Satti',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['validMiddleName'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['surnameInput'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(validMiddleNameFeedback).toHaveTextContent(
			'Middle name must be 30 characters or less',
		);
	});

	test('8. Empty surname name input not allowed', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const firstNameText = getByTestId('enterFirstName');
		const middleNamesText = getByTestId('enterMiddleNames');
		const surNameText = getByTestId('enterSurname');
		// const dateOfBirthValue = getByTestId('enterDateOfBirth')
		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const address1Text = getByTestId('enterAddress1');
		const address2Text = getByTestId('enterAddress2');
		const cityTownText = getByTestId('enterCityTown');
		const postcodeText = getByTestId('enterPostcode');
		const passwordText = getByTestId('enterPassword');
		const retypePasswordText = getByTestId('retypePassword');

		const validSurNameFeedback = getByTestId('validSurNameFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			firstNameInput: 'Yasir',
			middleNamesInput: 'Kamal M H',
			validSurName: '',
			emailInput: 'yasir.satti@and.digial',
			retypeEmailInput: 'yasir.satti@and.digital',
			address1Input: 'Bloc',
			address2Input: '17 Marble Street',
			cityTownInput: 'Manchester',
			postcodeInput: 'M2 3WA',
			passwordInput: '12039eU2js92',
			retypePasswordInput: '12039eU2js92',
		};

		fireEvent.change(firstNameText, {
			target: { value: testData['firstNameInput'] },
		});
		fireEvent.change(middleNamesText, {
			target: { value: testData['middleNamesInput'] },
		});
		fireEvent.change(surNameText, {
			target: { value: testData['validSurName'] },
		});
		fireEvent.change(emailText, {
			target: { value: testData['emailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['retypeEmailInput'] },
		});
		fireEvent.change(address1Text, {
			target: { value: testData['address1Input'] },
		});
		fireEvent.change(address2Text, {
			target: { value: testData['address2Input'] },
		});
		fireEvent.change(cityTownText, {
			target: { value: testData['cityTownInput'] },
		});
		fireEvent.change(postcodeText, {
			target: { value: testData['postcodeInput'] },
		});
		fireEvent.change(passwordText, {
			target: { value: testData['passwordInput'] },
		});
		fireEvent.change(retypePasswordText, {
			target: { value: testData['retypePasswordInput'] },
		});

		fireEvent.click(pressRegisterButton);

		expect(validSurNameFeedback).toHaveTextContent('cannot be blank');
	});

	test('9. Surname name input length 30 char or less', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const surNameText = getByTestId('enterSurname');
		
		const validSurNameFeedback = getByTestId('validSurNameFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validSurName: 'SattiWilshereRahmanAlexVeronaFergesunBekaham',
		};

		fireEvent.change(surNameText, {
			target: { value: testData['validSurName'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validSurNameFeedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	test('10. Valid surname name input', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const surNameText = getByTestId('enterSurname');
	
		const validSurNameFeedback = getByTestId('validSurNameFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validSurName: 'Satti',
		};

		fireEvent.change(surNameText, {
			target: { value: testData['validSurName'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validSurNameFeedback).toHaveTextContent('');
	});
});