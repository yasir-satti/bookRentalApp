import { render, fireEvent } from '@testing-library/react';
// import { debug } from 'webpack';
import App from '../app/App';

// const form = getByTestId("form");

describe('Email', () => {
	test('12. Empty email input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emailText = getByTestId('enterEmail');
		
		const validEmailFeedback = getByTestId('validEmailFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
		};

		fireEvent.change(emailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validEmailFeedback).toHaveTextContent('Cannot be blank');
	});

	test('13. Not valid email input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emailText = getByTestId('enterEmail');
		const validEmailFeedback = getByTestId('validEmailFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			notValidEmailInput: 'yasir.sattiand.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['notValidEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validEmailFeedback).toHaveTextContent('Email entered is not valid');
	});

	test('14. Valid Email input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emailText = getByTestId('enterEmail');
		const validEmailFeedback = getByTestId('validEmailFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
			notValidEmailInput: 'yasir.sattiand.digial',
			validEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validEmailFeedback).toHaveTextContent('');
	});

	test('15. Both Email and retype input are empty validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
		};

		fireEvent.change(emailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent('Cannot be blank');
	});

	test('16. Valid Email and empty retype input validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');

		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
			validEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent(
			'Cannot be blank',
		);
	});

	test('17. Empty Email and valid email retype input validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');

		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyEmailInput: '',
			validEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['emptyEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent(
			'Re-typed email does not match',
		);
	});

	test('18. Correct emails entered but not matching', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validEmailInput: 'yassir_satti@hotmail.com',
			validRetypeEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['validRetypeEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent(
			'Re-typed email does not match',
		);
	});

	test('19. Valid Email retype input form validation works', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const emailText = getByTestId('enterEmail');
		const retypeEmailText = getByTestId('retypeEmail');
		
		const validRetypeEmailFeedback = getByTestId('validRetypeEmailFeedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validEmailInput: 'yasir.satti@and.digial',
			validRetypeEmailInput: 'yasir.satti@and.digial',
		};

		fireEvent.change(emailText, {
			target: { value: testData['validEmailInput'] },
		});
		fireEvent.change(retypeEmailText, {
			target: { value: testData['validRetypeEmailInput'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validRetypeEmailFeedback).toHaveTextContent('');
	});
});