export const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	boxState: '',
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'SET_FIELD':
			return {
				...state,
				field: payload,
			};
		case 'SET_GAME_OVER':
			return {
				...state,
				isGameEnded: payload,
			};
		case 'SET_DRAW':
			return {
				...state,
				isDraw: payload,
			};
		case 'SET_BOX_STATE':
			return {
				...state,
				boxState: payload,
			};
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
