import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ARTICLES_FETCH, GET_ARTICLES_SUCCESS, LOAD_MORE_ARTICLES_FETCH, LOAD_MORE_ARTICLES_SUCCESS } from '../actions/home';
import { SEARCH_ARTICLES_FETCH, SEARCH_ARTICLES_SUCCESS } from '../actions/search';
import { allArticles } from '../data';

async function articlesFetch(page = 1) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=980f0d42ced64c0a8f5325a65386d0ad&page=${page}`);
    return await response.json();
}

function* workerGetArticlesFetch() {
    let articles = yield call(articlesFetch);
    // backup in case api response returns an error
    articles = articles.status === 'ok' ? articles : allArticles;

    yield put({ type: GET_ARTICLES_SUCCESS, payload: articles });
}

function* workerLoadMoreArticlesFetch(action) {
    let articles = yield call(articlesFetch, action.payload);
    articles = articles.status === 'ok' ? articles : allArticles;

    yield put({ type: LOAD_MORE_ARTICLES_SUCCESS, payload: articles });
}

async function searchArticlesFetch(search) {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search.searchTerm}&sortBy=${search.sortBy}&apiKey=980f0d42ced64c0a8f5325a65386d0ad`);
    return await response.json();
}

function* workerSearchArticlesFetch(action) {
    let articles = yield call(searchArticlesFetch, action.payload);
    articles = articles.status === 'ok' ? articles : allArticles;

    yield put({
        type: SEARCH_ARTICLES_SUCCESS,
        payload: {
            articles,
            searchTerm: action.payload.searchTerm,
            sortBy: action.payload.sortBy
        }
    });
}

function* sagaWatcher() {
    yield takeEvery(GET_ARTICLES_FETCH, workerGetArticlesFetch);
    yield takeEvery(LOAD_MORE_ARTICLES_FETCH, workerLoadMoreArticlesFetch);
    yield takeEvery(SEARCH_ARTICLES_FETCH, workerSearchArticlesFetch);
}

export default sagaWatcher;