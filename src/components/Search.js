import { useDispatch, useSelector } from 'react-redux';
import { searchArticlesFetch } from '../actions/search';
import CardList from './CardList';

const Search = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.searchReducer);
    const { articles, searchTerm, sortBy } = state;

    const onSubmit = (event) => {
        event.preventDefault();
        const searchTerm = event.target.elements.searchTerm.value;
        const sortBy = event.target.elements.sortBy.value;

        dispatch(searchArticlesFetch(searchTerm, sortBy));
    }

    return (
        <>
            <div className="mt-6">
                <form onSubmit={onSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-5">
                                    <label htmlFor="searchTerm" className="block text-sm font-medium text-slate-800">
                                        Search term
                                    </label>
                                    <input
                                        type="text"
                                        name="searchTerm"
                                        id="searchTerm"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={searchTerm}
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-1">
                                    <label htmlFor="sortBy" className="block text-sm font-medium text-slate-800">
                                        Sort by
                                    </label>
                                    <select
                                        id="sortBy"
                                        name="sortBy"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue={sortBy}
                                    >
                                        <option value='publishedAt'>Published Date</option>
                                        <option value='popularity'>Popularity</option>
                                        <option value='relevancy'>Relevance</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <CardList articles={articles} />
        </>
    );
}

export default Search;