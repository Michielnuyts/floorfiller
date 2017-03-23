const SET_STAGE_ACTIVE = 'SET_STAGE_ACTIVE';
const SET_DAY_ACTIVE = 'SET_DAY_ACTIVE';

export const setStageActive = stage => {
  return {
    type: SET_STAGE_ACTIVE,
    stage
  };
};
export const setDayActive = day => {
  return {
    type: SET_DAY_ACTIVE,
    day
  };
};

const INITIAL_STATE = {
  activeDayTab: 'THURSDAY',
  activeStageTab: 'MAIN'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STAGE_ACTIVE:
      return { ...state, activeStageTab: action.stage };

    case SET_DAY_ACTIVE:
      return { ...state, activeDayTab: action.day };

    default:
      return state;
  }
};
