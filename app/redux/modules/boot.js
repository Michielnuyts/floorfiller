const UPDATE_FIRST_BOOT_STATE = 'UPDATE_FIRST_BOOT_STATE'

export const updateFirstBootState = bool => {
	return {
		type: UPDATE_FIRST_BOOT_STATE,
		bool,
	}
}

const INITIAL_STATE = {
	firstBoot: false,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_FIRST_BOOT_STATE:
			return { ...state, firstBoot: action.bool }
		default:
			return state
	}
}
