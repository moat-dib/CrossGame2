import { useState } from 'react';
import { GameLayout } from './GameLayout.js';
import { Field } from './Field.js';
import { Information } from './Information.js';
import styles from './FieldLayout.module.css';
import { store } from '../store.js';

import PropTypes from 'prop-types';
export const Game = ({ name }) => {
	Game.propTypes = {
		name: PropTypes.string,
	};
	let currentState = store.getState();
	const emptyField = ['', '', '', '', '', '', '', '', ''];

	const [boxState] = useState('');
	const [newState, setNewState] = useState(currentState);
	const newGameClick = () => {
		store.dispatch({ type: 'RESTART_GAME', payload: '' });
		//currentState = store.getState();
		//console.log(currentState);
		//setNewState(currentState);
		//const emptyField = field.map((item) => {
		//	return (item = '');
		//});
		//setField(emptyField);
		//setCurrentPlayer('X');
		//setIsDraw(false);
		//setIsGameEnded(false);
		const boxes = document.querySelectorAll('td div');
		boxes.forEach((box) => {
			box.textContent = boxState;
			box.className = styles.box;
		});
	};
	return (
		<>
			<GameLayout name={name} newGameClick={newGameClick} />
			<Field
			//field={field}
			//setField={setField}
			//currentPlayer={currentPlayer}
			//setCurrentPlayer={setCurrentPlayer}
			//isGameEnded={isGameEnded}
			//setIsGameEnded={setIsGameEnded}
			//setIsDraw={setIsDraw}
			/>
			<Information
			//isGameEnded={isGameEnded}
			//isDraw={isDraw}
			//currentPlayer={currentPlayer}
			/>
		</>
	);
};
