import { InformationLayout } from './InformationLayout.js';
export const Information = (props) => {
	return (
		<InformationLayout
			isGameEnded={props.isGameEnded}
			isDraw={props.isDraw}
			currentPlayer={props.currentPlayer}
		/>
	);
};
