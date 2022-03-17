import { SEARCH_ARTICLES_SUCCESS } from "../actions/search";

const initialState = {
    articles: [],
    searchTerm: '',
    sortBy: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: [...action.payload.articles.articles],
                searchTerm: action.payload.searchTerm,
                sortBy: action.payload.sortBy
            }

        default:
            return { ...state };
    }
}

export default searchReducer;