export const GET_ARTICLES_FETCH = 'GET_ARTICLES_FETCH';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const LOAD_MORE_ARTICLES_FETCH = 'LOAD_MORE_ARTICLES_FETCH';
export const LOAD_MORE_ARTICLES_SUCCESS = 'LOAD_MORE_ARTICLES_SUCCESS';

export const getArticlesFetch = () => ({
    type: GET_ARTICLES_FETCH
});

export const loadMoreArticlesFetch = (page) => ({
    type: LOAD_MORE_ARTICLES_FETCH,
    payload: page
});