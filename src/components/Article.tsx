import React from 'react';

const Article = ({ article }: {
    article: {imageUrl: string,
    title: string,
    publishDate: string,
    summary: string,
    url: string}}) => (
      <article className="space-article">
        <a target="_blank" rel="noreferrer" href={article.url}>
          <img className="image" src={article.imageUrl} alt={article.title} />
          <h1 className="title">{article.title}</h1>
          <p className="date">{article.publishDate}</p>
          <p className="summary">{article.summary}</p>
        </a>
      </article>
);

export default Article;
