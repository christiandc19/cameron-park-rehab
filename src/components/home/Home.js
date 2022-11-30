import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Home.css'
import BgVideo from '../../assets/hero-vbg.mp4'
import ServicesCards from '../services/ServicesCards';

const Home = () => {
    return (
        <>
        <div className='hero'>
        <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />            
            <div className="container">
                <div className="content">
                    
                <Fade top><h1>BAKERSFIELD <span><br/>REHAB</span></h1></Fade> 
                <Fade bottom>
                    <h2 className='subtitle'>MENTAL HEALTH TREATMENT FACILITY </h2>
                    <p>Find your happiness and learn to put it first.</p>
                </Fade>

                    <Link to="/about-us">
                    <div><button>Learn More</button></div>
                    </Link>
                </div>
            </div>
        </div>

        <ServicesCards />

        </>
    )
}

export default Home
