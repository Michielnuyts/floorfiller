import asyncStore from 'react-native-simple-store';

const FAVORITE_ARTIST = 'FAVORITE_ARTIST';
const UNFAVORITE_ARTIST = 'UNFAVORITE_ARTIST';
const UPDATE_FAVORITES_FROM_ASYNC_STORAGE = 'UPDATE_FAVORITES_FROM_ASYNC_STORAGE';

export const favoriteArtist = artist => {
  return {
    type: FAVORITE_ARTIST,
    artist,
  };
};
export const unFavoriteArtist = artist => {
  return {
    type: UNFAVORITE_ARTIST,
    artist,
  };
};

const updatePersistedStore = state => {
  // Persist favorite artists to the AsyncStorage
  asyncStore.save('favoriteArtists', {
    favorites: state,
  });
};

const pushToRedux = stateFromAsync => {
  return {
    type: UPDATE_FAVORITES_FROM_ASYNC_STORAGE,
    stateFromAsync,
  };
};

// Get the saved favorite artists from the device storage
// And dispatch to redux store
export const setInitialStateFromAsyncstorage = () => {
  return dispatch => {
    asyncStore
      .get('favoriteArtists')
      .then(favoriteArtists => {
        dispatch(pushToRedux(favoriteArtists.favorites));
      })
      .catch(error => {
        console.log('oops', error);
      });
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case FAVORITE_ARTIST:
      updatePersistedStore({ ...state, [action.artist]: true });
      return { ...state, [action.artist]: true };

    case UNFAVORITE_ARTIST:
      updatePersistedStore({ ...state, [action.artist]: false });
      return { ...state, [action.artist]: false };

    case UPDATE_FAVORITES_FROM_ASYNC_STORAGE:
      return { ...action.stateFromAsync };

    default:
      return state;
  }
};
