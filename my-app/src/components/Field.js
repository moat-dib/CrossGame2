import { FieldLayout } from './FieldLayout.js';
export const Field = (props) => {
	return (
		<FieldLayout
			field={props.field}
			setField={props.setField}
			currentPlayer={props.currentPlayer}
			setCurrentPlayer={props.setCurrentPlayer}
			isGameEnded={props.isGameEnded}
			setIsGameEnded={props.setIsGameEnded}
			isDraw={props.isDraw}
			setIsDraw={props.setIsDraw}
		/>
	);
};
