import styles from './InformationLayout.module.css';
export const InformationLayout = (props) => {
	let infoString = '';
	if (props.isDraw) {
		infoString = 'Ничья';
	} else {
		if (props.isGameEnded) infoString = `Победа: ${props.currentPlayer}`;
		else infoString = `Ходит: ${props.currentPlayer}`;
	}
	return <div className={styles.information}>{infoString}</div>;
};
