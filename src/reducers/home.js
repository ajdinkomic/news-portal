import { GET_ARTICLES_SUCCESS, LOAD_MORE_ARTICLES_SUCCESS } from "../actions/home";

const initialState = {
    articles: [],
    totalResults: 0,
    page: 0
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: [...action.payload.articles],
                totalResults: action.payload.totalResults,
                page: 1
            }

        case LOAD_MORE_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: [...state.articles, ...action.payload.articles],
                totalResults: action.payload.totalResults,
                page: state.page + 1
            }

        default:
            return { ...state };
    }
}

export default homeReducer;