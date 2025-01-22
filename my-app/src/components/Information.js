import { InformationLayout } from './InformationLayout.js';
import PropTypes from 'prop-types';
import { store } from '../store.js';
import { useState } from 'react';
export const Information = () => {
	const [currentState, setCurrentState] = useState(store.getState());
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
	let infoString = createInfoString(
		currentState.isGameEnded,
		currentState.isDraw,
		currentState.currentPlayer,
	);
	// Information.propTypes = {
	// 	isGameEnded: PropTypes.bool,
	// 	isDraw: PropTypes.bool,
	// 	currentPlayer: PropTypes.string,
	// 	info: PropTypes.string,
	// };
	return <InformationLayout info={infoString} />;
};
