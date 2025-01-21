import { GameLayout } from './GameLayout.js';
import { Field } from './Field.js';
import { Information } from './Information.js';
import styles from './FieldLayout.module.css';
import { store } from '../store.js/index.js';

import PropTypes from 'prop-types';
export const Game = ({ name }) => {
	Game.propTypes = {
		name: PropTypes.string,
	};
	//const emptyField = ['', '', '', '', '', '', '', '', ''];
	//const [currentPlayer, setCurrentPlayer] = useState('X');
	//const [isGameEnded, setIsGameEnded] = useState(false);
	//const [isDraw, setIsDraw] = useState(false);
	//const [field, setField] = useState(emptyField);
	//const [boxState] = useState('');
	const newGameClick = () => {
		store.dispatch({ type: 'RESTART_GAME', payload: '' });
		//const emptyField = field.map((item) => {
		//	return (item = '');
		//});
		//setField(emptyField);
		//setCurrentPlayer('X');
		//setIsDraw(false);
		//setIsGameEnded(false);
		const boxes = document.querySelectorAll('td div');
		boxes.forEach((box) => {
			box.textContent = '';
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
