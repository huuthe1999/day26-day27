import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';
import './Card.css';
const Card = ({ value }) => {
	return (
		<div className='card' style={{ background: value }}>
			<small>{value}</small>
			<div
				className='card__copy'
				data-tip='tooltip'
				data-for='cardCopy'
				onClick={e => {
					console.log(e);
					navigator.clipboard.writeText(value);
					toast('Copied!', {
						className: 'copy__tooltip-copied',
					});
					// e.preventDefault();
					// ReactTooltip.hide(refShow);
					// ReactTooltip.show(refHide);
				}}>
				<i className='far fa-clipboard'></i>
			</div>
			<ReactTooltip
				eventOff='click'
				offset={{ right: 20 }}
				id='cardCopy'
				place='right'
				effect='solid'>
				Copy
			</ReactTooltip>
		</div>
	);
};

export default Card;
