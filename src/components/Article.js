import React from 'react';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { slugify } from '../shared/functions';

const Article = () => {
    const params = useParams();
    const slug = params.slug;

    const state = useSelector(state => state);
    const articles = [...state.homeReducer.articles, ...state.searchReducer.articles];
    const article = articles.find(article => slugify(article.title) === slug);

    return (
        article
            ? <div className='mt-6 text-left text-slate-800'>
                <div className="flex">
                    <div className='p-4 basis-1/2'>
                        <img className='w-full h-96 object-cover' src={article.urlToImage} alt={article.title} />
                    </div>
                    <div className='p-4 basis-1/2'>
                        <h2 className='text-4xl font-bold'>{article.title}</h2>
                        <h5 className='mt-6 text-xl font-semibold'>{article.description}</h5>
                        <p className='mt-4 text-md'>Source: {article.source?.name}</p>
                        <p className='mt-8 text-right text-sm'>{article.author}</p>
                        <p className='text-right text-sm'>
                            <em>
                                <Moment format="DD.MM.YYYY.">
                                    {article.publishedAt}
                                </Moment>
                            </em>
                        </p>
                    </div>
                </div>

                <div className='p-4'>
                    <p className='text-justify'>{article.content}</p>
                </div>
            </div>
            : <h2 className='text-4xl font-bold mt-12 text-slate-800'>Article Not Found!</h2>
    );
}

export default Article;
