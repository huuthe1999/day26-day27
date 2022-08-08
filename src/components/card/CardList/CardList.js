import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ data }) => {
	return (
		<div className='cards'>
			{data.map(item => (
				<Card key={item} value={item} />
			))}
		</div>
	);
};

export default CardList;
