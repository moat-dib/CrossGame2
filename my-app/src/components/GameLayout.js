import styles from './GameLayout.module.css';
export const GameLayout = ({name, newGameClick}) => {
	return (
		<>
			<h2>{name}</h2>
			<div className={styles.buttonDiv}>
				<button className={styles.button} onClick={newGameClick}>New Game</button>
			</div>
		</>
	);
};
