import { ref } from '~/firebase';
import asyncStore from 'react-native-simple-store';

const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS';
const LOADING_ARTISTS = 'LOADING_ARTISTS';
const GET_ARTISTS_FROM_ASYNC = 'GET_ARTISTS_FROM_ASYNC';

// Save Artist Lineup to async as well
const updatePersistedStore = state => {
  // Persist favorite artists to the AsyncStorage
  asyncStore.save('favoriteArtists', {
    favorites: state,
  });
};
// function to push data from asyncstore back to redux
const pushToRedux = lineupFromAsync => {
  return {
    type: GET_ARTISTS_FROM_ASYNC,
    lineupFromAsync,
  };
};

// Get the saved artists from the device storage
// And dispatch to redux store
export const setInitialStateFromAsyncstorage = () => {
  return dispatch => {
    asyncStore
      .get('lineup')
      .then(lineup => {
        dispatch(pushToRedux(lineup));
      })
      .catch(() => {
        // Set an initial empty object for this key, this should prevent iOS
        // app from crashing on launch.
        asyncStore.save('lineup', {
          lineup: {},
        });
      });
  };
};

// Get all the artists from firebase, should only happen once
// afterwards it will get chached in redux and persist in the
// local storage of the device
export const getAllArtists = () => {
  return dispatch => {
    dispatch(loadingArtists(true));
    ref
      .child(`/lineup`)
      .once('value')
      .then(snapshot => {
        dispatch({
          type: GET_ALL_ARTISTS,
          artists: snapshot.val(),
        });
        // Also save to async
        updatePersistedStore(snapshot.val());
      })
      .then(() => dispatch(loadingArtists(false)))
      .catch(error => console.log(error));
  };
};

const loadingArtists = loading => {
  return {
    type: LOADING_ARTISTS,
    loading,
  };
};

const INITIAL_STATE = {
  artists: null,
  loadingArtists: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ARTISTS:
      return { ...state, artists: action.artists };

    case LOADING_ARTISTS:
      return { ...state, loadingArtists: action.loading };

    case GET_ARTISTS_FROM_ASYNC:
      return { artists: { ...action.lineupFromAsync } };

    default:
      return state;
  }
};
