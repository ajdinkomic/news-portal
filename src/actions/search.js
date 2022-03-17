export const SEARCH_ARTICLES_FETCH = 'SEARCH_ARTICLES_FETCH';
export const SEARCH_ARTICLES_SUCCESS = 'SEARCH_ARTICLES_SUCCESS';

export const searchArticlesFetch = (searchTerm, sortBy) => ({
    type: SEARCH_ARTICLES_FETCH,
    payload: {
        searchTerm,
        sortBy
    }
});