import { InformationLayout } from './InformationLayout.js';
import PropTypes from 'prop-types';
export const Information = ({ isGameEnded, isDraw, currentPlayer }) => {
	const createInfoString = (isGameEnded, isDraw, currentPlayer) => {
		let infoString = '';
		if (isDraw) {
			infoString = 'Ничья';
		} else {
			if (isGameEnded) infoString = `Победа: ${currentPlayer}`;
			else infoString = `Ходит: ${currentPlayer}`;
		}
		return infoString;
	};
	let infoString = createInfoString(isGameEnded, isDraw, currentPlayer);
	Information.propTypes = {
		isGameEnded: PropTypes.bool,
		isDraw: PropTypes.bool,
		currentPlayer: PropTypes.string,
		info: PropTypes.string,
	};
	return <InformationLayout info={infoString} />;
};
