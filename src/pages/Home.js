import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/spaghetti-g4b4b17572_1920.jpg';
import '../styles/Home.css';

function Home() {
  return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
          <div className='headerContainer' >
            <h1> Pasta</h1>
            <p>Pasta To FIT ANY TAST </p>
            <Link to="/menu">
            <button> ORDER NOW</button>
            </Link>
          </div>
        </div>
  );
}

export default Home;