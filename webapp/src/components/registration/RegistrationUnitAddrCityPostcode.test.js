import { render, fireEvent } from '@testing-library/react';
import App from '../app/App';

describe('Addresse, city/Town and postcode', () => {
	test('20. Address 1 value cannot be blank', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const address1Text = getByTestId('enterAddress1');
		
		const validAddres1Feedback = getByTestId('validAddres1Feedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyAddress1: '',
		};

		fireEvent.change(address1Text, {
			target: { value: testData['emptyAddress1'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres1Feedback).toHaveTextContent('Cannot be blank');
	});

	test('21. Address 1 name less than 30 characters', () => {
		const onSubmitMock = jest.fn();
		const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

		const address1Text = getByTestId('enterAddress1');
	
		const validAddres1Feedback = getByTestId('validAddres1Feedback');

		const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			address1lessThan30Char: 'Flat 5, Dyson Court',
		};

		fireEvent.change(address1Text, {
			target: { value: testData['address1lessThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres1Feedback).toHaveTextContent('');
	});

	test('22. Address 1 value is 30 characters', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const address1Text = getByTestId('enterAddress1');
	
	const validAddres1Feedback = getByTestId('validAddres1Feedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			address1Is30Char: 'Flat 5, Dyson Court, Hays Road',
		};

		fireEvent.change(address1Text, {
			target: { value: testData['address1Is30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres1Feedback).toHaveTextContent('');
	});

	test('23. Address 1 name is more than 30 characters', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const address1Text = getByTestId('enterAddress1');

	const validAddres1Feedback = getByTestId('validAddres1Feedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			address1IsMoreThan30Char: 'Flat 5, Dyson Court, Hays Road, London',
		};

		fireEvent.change(address1Text, {
			target: { value: testData['address1IsMoreThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres1Feedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	test('24. Address 2 value cannot be blank', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const address2Text = getByTestId('enterAddress2');

	const validAddres2Feedback = getByTestId('validAddres2Feedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyAddress2: '',
		};

		fireEvent.change(address2Text, {
			target: { value: testData['emptyAddress2'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres2Feedback).toHaveTextContent('Cannot be blank');
	});

	test('25. Address 2 value less than 30 characters', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const address2Text = getByTestId('enterAddress2');

	const validAddres2Feedback = getByTestId('validAddres2Feedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			address2lessThan30Char: 'Flat 5, Dyson Court',
		};

		fireEvent.change(address2Text, {
			target: { value: testData['address2lessThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres2Feedback).toHaveTextContent('');
	});

	test('26. Address 2 value is 30 characters', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const address2Text = getByTestId('enterAddress2');
	
	const validAddres2Feedback = getByTestId('validAddres2Feedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			address2Is30Char: 'Flat 5, Dyson Court, Hays Road',
		};

		fireEvent.change(address2Text, {
			target: { value: testData['address2Is30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres2Feedback).toHaveTextContent('');
	});

	test('27. Address 2 name is more than 30 characters', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const address2Text = getByTestId('enterAddress2');
	
	const validAddres2Feedback = getByTestId('validAddres2Feedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			address2IsMoreThan30Char: 'Flat 5, Dyson Court, Hays Road, London',
		};

		fireEvent.change(address2Text, {
			target: { value: testData['address2IsMoreThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validAddres2Feedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	test('28. City/town value cannot be blank', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const cityTownText = getByTestId('enterCityTown');

	const validCityTownFeedback = getByTestId('validCityTownFeedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyCityTown: '',
		};

		fireEvent.change(cityTownText, {
			target: { value: testData['emptyCityTown'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validCityTownFeedback).toHaveTextContent('Cannot be blank');
	});

	test('29. City/town value less than 30 characters', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const cityTownText = getByTestId('enterCityTown');
	
	const validCityTownFeedback = getByTestId('validCityTownFeedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			CityTownLessThan30Char: 'Manchester',
		};

		fireEvent.change(cityTownText, {
			target: { value: testData['CityTownLessThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validCityTownFeedback).toHaveTextContent('');
	});

	test('30. City/town value is 30 characters', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const cityTownText = getByTestId('enterCityTown');

	const validCityTownFeedback = getByTestId('validCityTownFeedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			CityTownIs30Char: 'Greater Manchester County rest',
		};

		fireEvent.change(cityTownText, {
			target: { value: testData['CityTownIs30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validCityTownFeedback).toHaveTextContent('');
	});

	test('31. City/town value is more than 30 characters', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const cityTownText = getByTestId('enterCityTown');
	
	const validCityTownFeedback = getByTestId('validCityTownFeedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			CityTownIsMoreThan30Char: 'Greater Manchester County rest UK',
		};

		fireEvent.change(cityTownText, {
			target: { value: testData['CityTownIsMoreThan30Char'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validCityTownFeedback).toHaveTextContent(
			'name must be 30 characters or less',
		);
	});

	test('32. Empty postcode input is not valid', () => {
        const onSubmitMock = jest.fn();
	const {getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const postcodeText = getByTestId('enterPostcode');

	const validPostcodeFeedback = getByTestId('validPostcodeFeedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			emptyPostcode: '',
		};

		fireEvent.change(postcodeText, {
			target: { value: testData['emptyPostcode'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPostcodeFeedback).toHaveTextContent('Postcode is not valid!');
	});

	test('33. Valid postcode input', () => {
        const onSubmitMock = jest.fn();
	const { getByTestId } = render(<App onSubmit={onSubmitMock} />);

	const postcodeText = getByTestId('enterPostcode');

	const validPostcodeFeedback = getByTestId('validPostcodeFeedback');

	const pressRegisterButton = getByTestId('pressRegister');

		const testData = {
			validPostcode: 'M9 8DR',
		};

		fireEvent.change(postcodeText, {
			target: { value: testData['validPostcode'] },
		});
		fireEvent.click(pressRegisterButton);
		expect(validPostcodeFeedback).toHaveTextContent('');
	});
});
