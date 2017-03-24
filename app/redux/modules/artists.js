import { ref } from '~/firebase';

const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS';

// Get all the artists from firebase, should only happen once
// afterwards it will get chached in redux and persist in the
// local storage of the device
export const getAllArtists = () => {
  return dispatch => {
    ref.child(`/lineup`).once('value').then(snapshot =>
      dispatch({
        type: GET_ALL_ARTISTS,
        artists: snapshot.val()
      }));
  };
};

const INITIAL_STATE = {
  artists: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ARTISTS:
      return { ...state, artists: action.artists };

    default:
      return state;
  }
};
