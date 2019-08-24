
export const FETCH_ARTICLES = "fetch_articles";

export const fetchArticles = source => async dispatch => {
  const res = {};

  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data.articles
  });
};
