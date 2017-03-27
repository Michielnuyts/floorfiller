import { ref } from '~/firebase';

const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS';
const LOADING_ARTISTS = 'LOADING_ARTISTS';

// Get all the artists from firebase, should only happen once
// afterwards it will get chached in redux and persist in the
// local storage of the device
export const getAllArtists = () => {
  return dispatch => {
    dispatch(loadingArtists(true));
    ref
      .child(`/lineup`)
      .once('value')
      .then(snapshot =>
        dispatch({
          type: GET_ALL_ARTISTS,
          artists: snapshot.val()
        }))
      .then(() => dispatch(loadingArtists(false)))
      .catch(error => console.log(error));
  };
};

const loadingArtists = loading => {
  return {
    type: LOADING_ARTISTS,
    loading
  };
};

const INITIAL_STATE = {
  artists: null,
  loadingArtists: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ARTISTS:
      console.log('Ik ben hier!');
      return { ...state, artists: action.artists };

    case LOADING_ARTISTS:
      return { ...state, loadingArtists: action.loading };

    default:
      return state;
  }
};
