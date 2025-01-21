import { useState } from 'react';
import { InformationLayout } from './InformationLayout.js';
import { store } from '../store.js';
import PropTypes from 'prop-types';
export const Information = () => {
	const currentState = store.getState();
	const [state, setState] = useState(currentState);
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
		state.isGameEnded,
		state.isDraw,
		state.currentPlayer,
	);
	//Information.propTypes = {
	//	isGameEnded: PropTypes.bool,
	//	isDraw: PropTypes.bool,
	//	currentPlayer: PropTypes.string,
	//	info: PropTypes.string,
	//};
	return <InformationLayout info={infoString} />;
};
