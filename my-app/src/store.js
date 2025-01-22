import { appReducer } from './reducer';
export const createStore = (appReducer) => {
	let state;

	return {
		dispatch: (action) => {
			state = appReducer(state, action);
		},
		getState: () => state,
	};
};
export const store = createStore(appReducer);
store.dispatch({});
