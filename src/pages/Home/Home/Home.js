import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import Inventories from '../Inventories/Inventories';
import LearnMore from '../LearnMore/LearnMore';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className='container mt-5'>
        <Inventories all={false}></Inventories>
        <Link
          className='btn btn-secondary my-3 custom-button-width d-block mx-auto'
          to='/manage-inventories'
        >
          Manage Inventories
        </Link>
      </div>
      <LearnMore></LearnMore>
      <AdvancedFeatures></AdvancedFeatures>
      <Footer></Footer>
    </div>
  );
};

export default Home;
