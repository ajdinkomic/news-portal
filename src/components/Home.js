import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesFetch, loadMoreArticlesFetch } from '../actions/home';
import CardList from './CardList';

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.homeReducer);
    const { articles, totalResults, page } = state;

    useEffect(() => {
        dispatch(getArticlesFetch());
    }, []);

    const onLoadMore = () => {
        dispatch(loadMoreArticlesFetch(page + 1));
    }

    return !articles.length
        ? <h1 className='text-3xl font-bold'>Loading...</h1>
        : (
            <CardList articles={articles} totalResults={totalResults} loadMore={onLoadMore} />
        );
}

export default Home;
