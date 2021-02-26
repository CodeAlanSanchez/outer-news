import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { getArticles } from './actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </div>
  );
};
export default App;
