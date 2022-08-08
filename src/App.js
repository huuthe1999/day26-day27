import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import CardList from './components/card/CardList/CardList';
import Control from './components/control/Control';
import Header from './components/header/Header';
// import useDebounce from './components/hooks/useDebounce';
import { ToastContainer } from 'react-toastify';
import generateHexColorArray from './utils/generateHexColorArray';
function App() {
	const [colorArray, setColorArray] = useState([]);
	const [number, setNumber] = useState(30);

	// const debouncedSearchTerm = useDebounce(number, 500);

	const handleChange = e => {
		const value = e.target.value;
		if (!value) {
			setNumber(number);
		} else {
			setNumber(+value);
		}
	};

	const handleGenerate = () => {
		setColorArray(generateHexColorArray(number));
	};

	useEffect(() => {
		setColorArray(generateHexColorArray(number));
	}, []);
	return (
		<div className='app'>
			<Header />
			<Control
				handleChange={handleChange}
				number={number}
				handleGenerate={handleGenerate}
			/>
			<CardList data={colorArray} />
			<ToastContainer
				position='bottom-right'
				autoClose={1000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick={false}
				closeButton={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default App;
