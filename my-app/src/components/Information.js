import { InformationLayout } from './InformationLayout.js';
export const Information = ({isGameEnded, isDraw, currentPlayer}) => {
	const createInfoString = (isGameEnded, isDraw, currentPlayer) => {
		let infoString = '';
		if (isDraw) {
			infoString = 'Ничья';
		} else {
			if (isGameEnded) infoString = `Победа: ${currentPlayer}`;
			else infoString = `Ходит: ${currentPlayer}`;
		}
		return infoString;
	}
	let infoString = createInfoString(isGameEnded, isDraw, currentPlayer);
	return (
		<InformationLayout info = {infoString} />
	);
};
