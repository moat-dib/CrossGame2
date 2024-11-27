import { FieldLayout } from './FieldLayout.js';
import styles from './FieldLayout.module.css';
export const Field = ({field, setField, currentPlayer, setCurrentPlayer, isGameEnded,
	setIsGameEnded, setIsDraw}) => {
	
	const boxClicked = (e) => {
		if ((!isGameEnded) && (e.target.textContent ==='')) {
			const clickedCellName = e.target.id;
			const cellNumber = Number(clickedCellName[clickedCellName.length - 1]);
			if (field[cellNumber - 1] !== 'X' && field[cellNumber - 1] !== 'O') {
				e.target.textContent = currentPlayer;
				field[cellNumber - 1] = currentPlayer;
				setField(field);
			}
			if (hasWinner(field)) setIsGameEnded(true);
			else {
				if (!field.some((element) => {return (element !== 'X' && element !== 'O')})) {
					setIsDraw(true);
				} else {
					currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
				}
			}
		}
	};
	const isWinCombination  = (arrayOfCombinations, boxes) => {
		let result = false;
		arrayOfCombinations.forEach((arrayItem) => {
			let foundIdent = 0;
			for (let i =0; i < boxes.length; i++) {
				if (arrayItem[0] === boxes[i] || arrayItem[1] === boxes[i] || arrayItem[2] === boxes[i])
				 foundIdent++;
			}
			if (foundIdent === 3)	{
				result = true;
				colorWinBoxes(arrayItem);
			}
		});
		return result;
	}
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
		return (isWinCombination(winPatterns, XPlaces) || isWinCombination(winPatterns, OPlaces));
	}
	const colorWinBoxes = (itemsArray) => {
		const boxes = document.querySelectorAll('td div');
			for (let i=0; i<boxes.length; i++) {
				if ((i===itemsArray[0])||(i===itemsArray[1])||(i===itemsArray[2]))
				boxes[i].classList.add(styles.winner);
			}
		};
	return (
		<FieldLayout boxClicked = {boxClicked} />
	);
};
