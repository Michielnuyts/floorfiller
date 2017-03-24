import { ref } from '~/firebase';

const GET_ALL_ARTISTS_FROM_STAGE = 'GET_ALL_ARTISTS_FROM_STAGE';

export const getAllArtistsFromStage = stage => {
  return dispatch => {
    const artists = ref
      .child(`/lineup/${stage}`)
      .once('value')
      .then(snapshot => snapshot.val());
    // Send firebase results to Redux
    dispatch({
      type: GET_ALL_ARTISTS_FROM_STAGE,
      artists
    });
  };
};

const INITIAL_STATE = {
  artists: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ARTISTS_FROM_STAGE:
      return { ...state, artists: action.artists };

    default:
      return state;
  }
};
