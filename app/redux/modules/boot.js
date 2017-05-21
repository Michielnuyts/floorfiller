import asyncStore from 'react-native-simple-store';

const UPDATE_FIRST_BOOT_STATE = 'UPDATE_FIRST_BOOT_STATE';

export const updateFirstBootState = bool => {
  return {
    type: UPDATE_FIRST_BOOT_STATE,
    bool,
  };
};

export const checkForFirstBoot = () => {
  return async dispatch => {
    let token = await asyncStore.get('iklusthet');

    if (token) {
      dispatch(updateFirstBootState(false));
    } else {
      asyncStore.save('iklusthet', true).then(() => {
        dispatch(updateFirstBootState(true));
      });
    }
  };
};

const INITIAL_STATE = {
  firstBoot: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FIRST_BOOT_STATE:
      return { ...state, firstBoot: action.bool };
    default:
      return state;
  }
};
