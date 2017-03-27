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

// Initial state has to be dynamic depended on what day
// of the festival it currently is
const INITIAL_STATE = {
  activeDayTab: 'THURSDAY',
  activeStageTab: 'JOYHAUSER INVITES'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STAGE_ACTIVE:
      return { ...state, activeStageTab: action.stage };

    case SET_DAY_ACTIVE:
      // Set a standard selected stage for each day
      let activeStageTab = '';
      if (action.day === 'THURSDAY') {
        activeStageTab = 'JOYHAUSER INVITES';
      } else if (action.day === 'FRIDAY') {
        activeStageTab = 'MATERIA';
      } else if (action.day === 'SATURDAY') {
        activeStageTab = 'CULTURE TEK';
      }
      return { ...state, activeDayTab: action.day, activeStageTab };

    default:
      return state;
  }
};
