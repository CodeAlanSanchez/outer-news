import React from 'react';
import { useSelector } from 'react-redux';
import Article from './Article';

const Articles = () => {
  const articles = useSelector((state: {articles: object[]}) => state.articles);

  return (
    <div className="articles">
      {articles.length > 0 ? articles.map((article: any) => (
        <Article key={article.id} article={article} />
      )) : <div><h1>Third Party API seems to down...</h1></div>}
    </div>
  );
};

export default Articles;
