import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/spaghetti-g4b4b17572_1920.jpg';
import '../styles/Home.css';

function Home() {
  return (
        <div className='home'>
          <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})` }}>
            <h1> Pasta</h1>
            <p>Pasta To FIT ANY TAST</p>
            <Link to="/menu">
            <button> ORDER NOW</button>
            </Link>
          </div>
        </div>
  );
}

export default Home;