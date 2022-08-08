import './Control.css';

const Control = ({ number, handleChange, handleGenerate }) => {
	const handleAcceptNumber = event => {
		if (!/[0-9]/.test(event.key)) {
			event.preventDefault();
		}
	};
	return (
		<div className='controls'>
			<div className='form-group controls__container'>
				<input
					onChange={handleChange}
					value={number}
					type='text'
					onKeyPress={handleAcceptNumber}
					className='search__input'
					placeholder='Enter number'
					autoFocus
				/>
			</div>
			<button className='controls__btn' onClick={handleGenerate}>
				Generate
			</button>
		</div>
	);
};

export default Control;
