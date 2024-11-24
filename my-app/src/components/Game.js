import { useState } from 'react';
import { GameLayout } from './GameLayout.js';
import { Field } from './Field.js';
import { Information } from './Information.js';
export const Game = (props) => {
	const emptyField = ['', '', '', '', '', '', '', '', ''];
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(emptyField);

	return (
		<>
			<GameLayout name={props.name} field={field} setField={setField} />
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				IsDraw={isDraw}
				setIsDraw={setIsDraw}
			/>
			<Information
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
			/>
		</>
	);
};
