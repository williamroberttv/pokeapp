import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';
import Main from '../../components/Main';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
