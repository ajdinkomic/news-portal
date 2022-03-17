import React from "react";
import Card from "./Card";

const CardList = ({ articles, totalResults, loadMore }) => {
    return (
        <>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
                {articles.map((article) => (
                    <Card
                        key={article.title + Math.random()}
                        author={article.author}
                        content={article.content}
                        description={article.description}
                        publishedAt={article.publishedAt}
                        source={article.source}
                        title={article.title}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                ))}
            </div>

            {
                totalResults > articles.length &&
                <button className="mt-12 text-xl bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white px-8 py-2 rounded-full" onClick={loadMore}>Load more</button>
            }
        </>
    );
}

export default CardList;