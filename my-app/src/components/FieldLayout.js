import styles from './FieldLayout.module.css';
export const FieldLayout = (props) => {
	const emptyField = [['', '', '', '', '', '', '', '', '']];
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];
	const newGameClick = () => {
		props.setField(emptyField);
		props.setCurrentPlayer('X');
		props.setIsDraw(false);
		props.setIsGameEnded(false);
		const boxes = document.querySelectorAll('.box');
		boxes.forEach((box) => {
			box.textContent = '';
		});
	};
	function arrayIncludesCombination(array, element) {
		let result = false;
		array.forEach((item) => {
			if (
				item[0] === element[0] &&
				item[1] === element[1] &&
				item[2] === element[2]
			)
				result = true;
		});
		return result;
	}
	function hasWinner(field) {
		let OPlaces = [];
		let XPlaces = [];
		for (let i = 0; i < 9; i++) {
			if (field[i] === 'X') XPlaces.push(i);
			if (field[i] === 'O') OPlaces.push(i);
		}
		return (
			arrayIncludesCombination(WIN_PATTERNS, XPlaces) ||
			arrayIncludesCombination(WIN_PATTERNS, OPlaces)
		);
	}
	function isBoxEmpty(boxes, number) {
		return boxes[number] === '';
	}
	const boxClicked = (e) => {
		debugger;
		if (!props.isGameEnded) {
			const clickedCellName = e.target.id;

			const cellNumber = Number(clickedCellName[clickedCellName.length - 1]);

			if (
				props.field[cellNumber - 1] !== 'X' &&
				props.field[cellNumber - 1] !== 'O'
			) {
				e.target.textContent = props.currentPlayer;
				props.field[cellNumber - 1] = props.currentPlayer;
				props.setField(props.field);
			}
			const hasEmptyBox = props.field.find(
				(element) => element !== 'X' && element !== 'O',
			);
			if (hasWinner(props.field)) props.setIsGameEnded(true);
			else {
				if (hasEmptyBox === undefined) {
					props.setIsDraw(true);
				} else {
					props.currentPlayer === 'X'
						? props.setCurrentPlayer('O')
						: props.setCurrentPlayer('X');
				}
			}
		}
	};
	return (
		<div className={styles.game}>
			<div className={styles.table}>
				<table>
					<tr>
						<td>
							<div id="box1" className="box" onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box2" className="box" onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box3" className="box" onClick={boxClicked}></div>
						</td>
					</tr>
					<tr>
						<td>
							<div id="box4" className="box" onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box5" className="box" onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box6" className="box" onClick={boxClicked}></div>
						</td>
					</tr>
					<tr>
						<td>
							<div id="box7" className="box" onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box8" className="box" onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box9" className="box" onClick={boxClicked}></div>
						</td>
					</tr>
				</table>
				<div className={styles.winning}></div>
			</div>
			<div className={styles.buttonDiv}>
				<button onClick={newGameClick}>NewGame</button>
			</div>
		</div>
	);
};
