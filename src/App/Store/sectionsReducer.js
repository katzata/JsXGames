const sectionsState = {
	initialSection: true,
	gameListSection: false,
	ranksSection: false,
	forumSection: false,
	linksSection: false,
	searchSection: false,
	profileSection: false,
	favoritesSection: false,
	freindsSection: false,
	userSection: false,
}

const sectionsReducer = (state = sectionsState, action) => {
	if (action.type === "initialSection") {
		if (action.value === "open") {
			return {
				...state,
				initialSection: true
			}
		} else {
			return {
				...state,
				initialSection: false
			}
		}
	}

	if (action.type === "gameListSection") {
		if (action.value === "open") {
			return {
				...state,
				gameListSection: true
			}
		} else {
			return {
				...state,
				gameListSection: false,
				initialSection: true
			}
		}
	}

	if (action.type === "ranksSection") {
		if (action.value === "open") {
			return {
				...state,
				ranksSection: true
			}
		} else {
			return {
				...state,
				ranksSection: false,
				initialSection: true
			}
		}
	}

	if (action.type === "forumSection") {
		if (action.value === "open") {
			return {
				...state,
				forumSection: true
			}
		} else {
			return {
				...state,
				forumSection: false,
				initialSection: true
			}
		}
	}

	if (action.type === "linksSection") {
		if (action.value === "open") {
			return {
				...state,
				linksSection: true
			}
		} else {
			return {
				...state,
				linksSection: false,
				initialSection: true
			}
		}
	}

	if (action.type === "searchSection") {
		if (action.value === "open") {
			return {
				...state,
				searchSection: true
			}
		} else {
			return {
				...state,
				searchSection: false,
				initialSection: true
			}
		}
	}

	if (action.type === "profileSection") {
		if (action.value === "open") {
			return {
				...state,
				profileSection: true,
			}
		} else {
			return {
				...state,
				profileSection: false,
				initialSection: true
			}
		}
	}

	if (action.type === "favoritesSection") {
		if (action.value === "open") {
			return {
				...state,
				favoritesSection: true
			}
		} else {
			return {
				...state,
				favoritesSection: false
			}
		}
	}

	if (action.type === "friendsSection") {
		if (action.value === "open") {
			return {
				...state,
				friendsSection: true
			}
		} else {
			return {
				...state,
				friendsSection: false
			}
		}
	}

	if (action.type === "userSection") {
		if (action.value === "open") {
			return {
				...state,
				userSection: true
			}
		} else {
			return {
				...state,
				userSection: false,
				initialSection: true
			}
		}
	}

	return state;
};

export default sectionsReducer;