/* eslint-disable import/prefer-default-export */
import * as api from '../api';

export const getArticles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.error(error);
  }
};
