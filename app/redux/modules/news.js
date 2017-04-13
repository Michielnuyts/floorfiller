import { ref } from '~/firebase';

const LOADING_NEWS = 'LOADING_NEWS';
const GET_ALL_NEWS = 'GET_ALL_NEWS';

const loadingNews = loading => {
  return {
    type: LOADING_NEWS,
    loading,
  };
};

export const fetchNews = () => {
  return dispatch => {
    dispatch(loadingNews(true));
    ref
      .child('/news')
      .once('value')
      .then(snapshot =>
        dispatch({
          type: GET_ALL_NEWS,
          news: snapshot.val(),
        }))
      .then(() => dispatch(loadingNews(false)))
      .catch(error => console.log(error));
  };
};

const INITIAL_STATE = {
  news: {},
  loadingNews: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_NEWS:
      return { ...state, loadingNews: action.loading };
    case GET_ALL_NEWS:
      return { ...state, news: action.news };
    default:
      return state;
  }
};
