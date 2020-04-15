const modalsState = {
	sendMessageModal: false,
	viewUserStatsModal: false
}

const modalsReducer = (state = modalsState, action) => {
	if (action.type === "sendMessage") {
		if (action.value === "open") {
			return {
				...state,
				sendMessageModal: true
			}
		} else {
			return {
				...state,
				sendMessageModal: false
			}
		}
	}

	if (action.type === "viewUserStats") {
		if (action.value === "open") {
			return {
				...state,
				viewUserStatsModal: true
			}
		} else {
			return {
				...state,
				viewUserStatsModal: false
			}
		}
	}

//Object.assign(temp, Object.entries(state)[i][0])
	return state;	
}

export default modalsReducer;