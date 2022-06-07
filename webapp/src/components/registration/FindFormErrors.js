const FindFormErrors = (form) => {
		const {
		  firstName,
		  middleNames,
		  surName,
		  dateOfBirth,
		  email,
		  retypeEmail,
		  address1,
		  address2,
		  cityTown,
		  postcode,
		  password,
		  retypePassword,
		} = form;

	function isPasswordLengthEightOrMore(str) {
		return !(str.length < 8);
	}

	function hasPasswordOneUpperCaseCharacter(str) {
		return /[A-Z]/.test(str);
	}

	function hasPasswordOneSpecialCharacter(str) {
		return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(str);
	}

	const isEmailValid = (emailValue) => {
		const emailRegex =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
		return emailRegex.test(emailValue);
	};

	const isPostcodeValid = (postcodeValue) => {
		const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
		return postcodeRegEx.test(postcodeValue);
	};

	const newErrors = {};
	if (!firstName || firstName === '') {
		newErrors.firstName = 'cannot be blank';
	} else {
		if (firstName.length > 30)
			newErrors.firstName = 'name must be 30 characters or less';
	}

	if (middleNames !== undefined) {
		if (middleNames.length > 30)
			newErrors.middleNames = 'Middle name must be 30 characters or less';
	}

	if (!surName || surName === '') {
		newErrors.surName = 'cannot be blank';
	} else {
		if (surName.length > 30)
			newErrors.surName = 'name must be 30 characters or less';
	}

	// if (true) {
	//   console.log("FindErrors: Date of birth selected...", dateOfBirth);
	//   newErrors.dateOfBirth = "date of birth is wrong!";
	// }

	if (email === undefined || email === '') {
		newErrors.email = 'Cannot be blank';
	} else {
		if (!isEmailValid(email)) {
			newErrors.email = 'Email entered is not valid';
		}
	}

	if (retypeEmail === undefined || retypeEmail === '') {
		newErrors.retypeEmail = 'Cannot be blank';
	} else {
		if (!(retypeEmail === email)) {
			newErrors.retypeEmail = 'Re-typed email does not match';
		}
	}

	if (!address1 || address1 === '') {
		newErrors.address1 = 'Cannot be blank';
	} else {
		if (address1.length > 30)
			newErrors.address1 = 'name must be 30 characters or less';
	}

	if (!address2 || address2 === '') {
		newErrors.address2 = 'Cannot be blank';
	} else {
		if (address2.length > 30)
			newErrors.address2 = 'name must be 30 characters or less';
	}

	if (!cityTown || cityTown === '') {
		newErrors.cityTown = 'Cannot be blank';
	} else {
		if (cityTown.length > 30)
			newErrors.cityTown = 'name must be 30 characters or less';
	}

	// if (!postcode || address1 === "") {
	//   newErrors.address1 = "Cannot be blank";
	// } else {
	//   if (address1.length > 30)
	//     newErrors.address1 = "name must be 30 characters or less";
	// }

	if (!isPostcodeValid(postcode)) newErrors.postcode = 'Postcode is not valid!';

	if (password === undefined || password === '') {
		newErrors.password = 'Cannot be blank';
	} else if (!isPasswordLengthEightOrMore(password)) {
		newErrors.password = 'Password has to be at least 8 characters!';
	} else if (!hasPasswordOneUpperCaseCharacter(password)) {
		newErrors.password =
			'Password must contain at least one upper case character';
	} else if (!hasPasswordOneSpecialCharacter(password))
		newErrors.password = 'Password must contain at least one special character';

	if (!(retypePassword === password))
		newErrors.retypePassword = 'Re-typed password does not match';

	return newErrors;
};

export default FindFormErrors;
