import React from 'react';
import { useSelector } from 'react-redux';
import Article from './Article';

const Articles = () => {
  const articles = useSelector((state: {articles: object[]}) => state.articles);

  return (
    <div className="articles">
      {articles.map((article: any) => (
        <Article article={article} />
      ))}
    </div>
  );
};

export default Articles;
