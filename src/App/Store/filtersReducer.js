const initialState = {
	games: false,
	search: false
}

const filtersReducer = (state = initialState, action) => {
	if (action.type === "gameFiltersToggle") {
		if (state.games) {
			return {
				...state,
				games: false
			}
		} else {
			return {
				...state,
				games: true
			}
		}
	}

	return state;
};

export default filtersReducer;