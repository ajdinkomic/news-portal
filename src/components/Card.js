import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../shared/functions';

const Card = ({ description, title, urlToImage }) => (
    <div className="group relative border border-neutral-200 shadow-md p-4 rounded-lg pb-14 bg-neutral-50">
        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            {
                <img
                    src={urlToImage ?? 'noImage.png'}
                    alt={title}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = 'noImage.png';
                    }}
                    className="w-full h-full object-center object-cover"
                />
            }
        </div>

        <h3 className="mt-6 text-base font-semibold text-slate-800">{title}</h3>
        <p className="mt-1 mb-4 text-sm text-slate-500">{description}</p>
        <Link
            to={`/articles/${slugify(title)}`}
            className="border border-indigo-500 rounded-full px-6 py-2 text-indigo-500 hover:bg-indigo-500 hover:text-white absolute bottom-4 right-4">
            Read full article
        </Link>
    </div>
);

export default Card;