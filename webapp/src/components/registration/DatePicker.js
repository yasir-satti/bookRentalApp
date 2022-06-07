import React, { useState } from 'react';
// import { propTypes } from "react-bootstrap/esm/Image";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// function Datepicker() {
const Datepicker = (props) => {
	const [date, setDate] = useState(new Date());

	function handleChange(date) {
		console.log('Datepicker: dateOfBirthField...', date);
		setDate(date);
		this.props.handleChangeProps('dateOfBirthField', date);
	}

	return (
		<DatePicker
			dateFormat="dd/MM/yyyy"
			selected={date}
			onChange={handleChange}
		/>
	);
};

export default Datepicker;
