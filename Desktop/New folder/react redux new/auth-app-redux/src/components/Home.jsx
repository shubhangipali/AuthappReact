import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/header';
import Footer from './common/footer';
import { Container } from 'react-bootstrap';
import MainSection from '../MainSection';

const Home = () => {
  return (
    <div>
     
        {/* <Header /> */}
        <MainSection/>
        {/* <Footer /> */}
   
    </div>
  );
};

export default Home;
