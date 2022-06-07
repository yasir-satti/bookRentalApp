import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

import splash_image from '../../assets/image_book.jpeg';
import '../app/App.css';
import '../app/App.scss';

import findFormErrors from './FindFormErrors';
import Datepicker from './DatePicker';
import PasswordStrengthMeter from './PassowrdStrengthMeter';

const Registration = () => {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});

	const [password, setPassword] = useState('');

	const setField = (field, value) => {
		setForm({
			...form,
			[field]: value,
		});
		if (field === 'password') {
			setPassword(value);
		}
		if (!!errors[field])
			setErrors({
				...errors,
				[field]: null,
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = findFormErrors(form);
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			// alert('Thank you for your registration');
			const registrationUrl = 'http://localhost:8080/api/registration';
			const registrationData = {
				firstName: form.firstName,
				middleNames: form.middleNames,
				surName: form.surName,
				email: form.email,
				address1: form.address1,
				address2: form.address2,
				cityTown: form.cityTown,
				postcode: form.postcode,
				password: form.password,
			};
			axios.post(registrationUrl, registrationData);
			//   .then((response) => {
			// 	if (response.data != null) {
			// 	  console.log(registrationData);
			// 	  alert("Registration data posting was successful!");
			// 	} else {
			// 	  alert("Registration data posting ERROR!");
			// 	}
			//   });
		}
	};

	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
				integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
				crossOrigin="anonymous"
			/>
			<>
				<meta charSet="utf-8"></meta>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
			</>

			<div>
				<script
					src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
					integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
					crossOrigin="anonymous"
				></script>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
					integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
					crossOrigin="anonymous"
				></script>

				<Image src={splash_image} fluid alt="logo" />
				<p>Book Rental Service</p>

				<p>Register</p>

				<Form data-testid="form" onSubmit={handleSubmit}>
					<Row>
						<Col xs="auto">
							<Form.Group className="mb-3" controlId="formFirstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									data-testid="enterFirstName"
									placeholder="Enter First name"
									onChange={(e) => setField('firstName', e.target.value)}
									isInvalid={!!errors.firstName}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validFirstNameFeedback"
								>
									{errors.firstName}
								</Form.Control.Feedback>
								<Form.Text className="text-muted">
									Type your first name and middle names
								</Form.Text>
							</Form.Group>
						</Col>

						<Col xs="auto">
							<Form.Group className="mb-3" controlId="formMiddleNames">
								<Form.Label>Middle names</Form.Label>
								<Form.Control
									type="text"
									data-testid="enterMiddleNames"
									placeholder="Enter Middle name(s)"
									onChange={(e) => setField('middleNames', e.target.value)}
									isInvalid={!!errors.middleNames}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validMiddleNameFeedback"
								>
									{errors.middleNames}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col xs="auto">
							<Form.Group className="mb-3" controlId="formSurname">
								<Form.Label>Surname</Form.Label>
								<Form.Control
									type="text"
									data-testid="enterSurname"
									placeholder="Enter Surname"
									onChange={(e) => setField('surName', e.target.value)}
									isInvalid={!!errors.surName}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validSurNameFeedback"
								>
									{errors.surName}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Form.Group className="mb-3" controlId="DateOfBirth">
							<Form.Label>Enter date of birth</Form.Label>
							<Datepicker
								data-testid="enterDateOfBirth"
								// onChange={(e) => { setField("dateOfBirth", e.target.value)} }
								// handleChangeProps={setField}
								// handleChangeProps{ (e) => { setField("dateOfBirth", e.target.value) }}
								isInvalid={!!errors.dateOfBirth}
							/>
							<Form.Control.Feedback
								type="invalid"
								data-testid="validDateOfBirthFeedback"
							>
								{errors.dateOfBirth}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>

					<Row>
						<Col xs="auto">
							<Form.Group className="mb-3" controlId="formEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									data-testid="enterEmail"
									placeholder="Enter email"
									onChange={(e) => setField('email', e.target.value)}
									isInvalid={!!errors.email}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validEmailFeedback"
								>
									{errors.email}
								</Form.Control.Feedback>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group className="mb-3" controlId="formRetypeEmail">
								<Form.Label>Re-type Email address</Form.Label>
								<Form.Control
									type="email"
									data-testid="retypeEmail"
									placeholder="Re-type email address"
									onChange={(e) => setField('retypeEmail', e.target.value)}
									isInvalid={!!errors.retypeEmail}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validRetypeEmailFeedback"
								>
									{errors.retypeEmail}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>

					<Row>
						<Col xs="auto">
							<Form.Group className="mb-3" controlId="Address1">
								<Form.Label>Address 1</Form.Label>
								<Form.Control
									type="text"
									data-testid="enterAddress1"
									onChange={(e) => setField('address1', e.target.value)}
									isInvalid={!!errors.address1}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validAddres1Feedback"
								>
									{errors.address1}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group className="mb-3" controlId="Address2">
								<Form.Label>Address 2</Form.Label>
								<Form.Control
									type="text"
									data-testid="enterAddress2"
									onChange={(e) => setField('address2', e.target.value)}
									isInvalid={!!errors.address2}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validAddres2Feedback"
								>
									{errors.address2}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col xs="auto">
							<Form.Group className="mb-3" controlId="CityTown">
								<Form.Label>City/Town</Form.Label>
								<Form.Control
									type="text"
									data-testid="enterCityTown"
									onChange={(e) => setField('cityTown', e.target.value)}
									isInvalid={!!errors.cityTown}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validCityTownFeedback"
								>
									{errors.cityTown}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group className="mb-3" controlId="Postcode">
								<Form.Label>Post code</Form.Label>
								<Form.Control
									type="text"
									data-testid="enterPostcode"
									onChange={(e) => setField('postcode', e.target.value)}
									isInvalid={!!errors.postcode}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validPostcodeFeedback"
								>
									{errors.postcode}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>

					<Row>
						<Col>
							<Form.Group className="mb-3" controlId="formPassword">
								<Form.Label>Choose Password</Form.Label>
								<Form.Control
									type="password"
									data-testid="enterPassword"
									onChange={(e) => setField('password', e.target.value)}
									isInvalid={!!errors.password}
								/>
								<PasswordStrengthMeter password={password} />
								<Form.Control.Feedback
									type="invalid"
									data-testid="validPasswordFeedback"
								>
									{errors.password}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className="mb-3" controlId="formRetypePassword">
								<Form.Label>Re-type Password</Form.Label>
								<Form.Control
									type="password"
									data-testid="retypePassword"
									onChange={(e) => setField('retypePassword', e.target.value)}
									isInvalid={!!errors.retypePassword}
								/>
								<Form.Control.Feedback
									type="invalid"
									data-testid="validRetypePasswordFeedback"
								>
									{errors.retypePassword}
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>
					<Button
						id="submit"
						variant="outline-info"
						size="lg"
						text="Submit"
						className="button"
						type="submit"
						data-testid="pressRegister"
					>
						Register
					</Button>
				</Form>
			</div>
		</>
	);
};

export default Registration;
