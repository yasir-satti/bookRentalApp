import zxcvbn from 'zxcvbn';
import './PasswordStrengthMeter.css';

const PasswordStrengthMeter = (props) => {
	const { password } = props;
	const testedResult = zxcvbn(password);

	const labelTypes = {
		0: 'Weak',
		1: 'Weak',
		2: 'Fair',
		3: 'Good',
		4: 'Strong'
	}

	const createPasswordLabel = ({score}) => labelTypes[score] ? labelTypes[score] : 'Weak';

	return (
		<>
			<div>
				<progress
					className={`password-strength-meter-progress strength-${createPasswordLabel(
						testedResult,
					)}`}
					value={testedResult.score}
					max="4"
				/>
				<br />
				<strong>Password strength:</strong> {createPasswordLabel(testedResult)}
			</div>
			<label>{password}</label>
		</>
	);
};

export default PasswordStrengthMeter;
