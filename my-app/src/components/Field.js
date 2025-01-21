import { useState } from 'react';
import { FieldLayout } from './FieldLayout.js';
import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';
import { store } from '../store.js';
export const Field = () =>
	//{
	//field,
	//setField,
	//currentPlayer,
	//setCurrentPlayer,
	//isGameEnded,
	//setIsGameEnded,
	//setIsDraw,
	//},
	{
		// Field.propTypes = {
		// 	field: PropTypes.array,
		// 	setField: PropTypes.object,
		// 	currentPlayer: PropTypes.string,
		// 	setCurrentPlayer: PropTypes.object,
		// 	isGameEnded: PropTypes.bool,
		// 	setIsGameEnded: PropTypes.object,
		// 	setIsDraw: PropTypes.object,
		// };
		const currentState = store.getState();
		const [state, setState] = useState(currentState);
		const boxClicked = (e) => {
			if (!state.isGameEnded && e.target.textContent === '') {
				const clickedCellName = e.target.id;
				const cellNumber = Number(clickedCellName[clickedCellName.length - 1]);
				if (
					state.field[cellNumber - 1] !== 'X' &&
					state.field[cellNumber - 1] !== 'O'
				) {
					e.target.textContent = state.currentPlayer;
					state.field[cellNumber - 1] = state.currentPlayer;
					//setField(field);
					store.dispatch({ type: 'SET_FIELD', payload: state.field });
				}
				if (hasWinner(state.field)) {
					//setIsGameEnded(true);
					store.dispatch({ type: 'SET_GAME_OVER', payload: true });
				} else {
					if (
						!state.field.some((element) => {
							return element !== 'X' && element !== 'O';
						})
					) {
						//setIsDraw(true);
						store.dispatch({ type: 'SET_DRAW', payload: true });
					} else {
						state.currentPlayer === 'X'
							? //? setCurrentPlayer('O')
								//: setCurrentPlayer('X');
								store.dispatch({
									type: 'SET_CURRENT_PLAYER',
									payload: 'O',
								})
							: store.dispatch({
									type: 'SET_CURRENT_PLAYER',
									payload: 'X',
								});
					}
				}
			}
		};
		const isWinCombination = (arrayOfCombinations, boxes) => {
			let result = false;
			arrayOfCombinations.forEach((arrayItem) => {
				let foundIdent = 0;
				for (let i = 0; i < boxes.length; i++) {
					if (
						arrayItem[0] === boxes[i] ||
						arrayItem[1] === boxes[i] ||
						arrayItem[2] === boxes[i]
					)
						foundIdent++;
				}
				if (foundIdent === 3) {
					result = true;
					colorWinBoxes(arrayItem);
				}
			});
			return result;
		};
		const hasWinner = (field) => {
			let OPlaces = [];
			let XPlaces = [];
			const winPatterns = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8], // Варианты побед по горизонтали
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8], // Варианты побед по вертикали
				[0, 4, 8],
				[2, 4, 6], // Варианты побед по диагонали
			];
			for (let i = 0; i < 9; i++) {
				if (field[i] === 'X') XPlaces.push(i);
				if (field[i] === 'O') OPlaces.push(i);
			}
			return (
				isWinCombination(winPatterns, XPlaces) ||
				isWinCombination(winPatterns, OPlaces)
			);
		};
		const colorWinBoxes = (itemsArray) => {
			const boxes = document.querySelectorAll('td div');
			for (let i = 0; i < boxes.length; i++) {
				if (i === itemsArray[0] || i === itemsArray[1] || i === itemsArray[2])
					boxes[i].classList.add(styles.winner);
			}
		};
		return <FieldLayout boxClicked={boxClicked} />;
	};
