import './Header.css';

const Header = ({ totalCountry, isLoading }) => {
	return (
		<header className='header'>
			<h1 className='header__title'>30 Days Of React</h1>
			<h2 className='header__subtitle'>Hexadecimal Colors</h2>
		</header>
	);
};

export default Header;
