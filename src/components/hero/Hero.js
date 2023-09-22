import React from "react";
import Fade from "react-reveal/Fade";
import "./Hero.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="content">
          <Fade left>
              <h2>WELCOME TO</h2>
            </Fade>
            <Fade right>
              <h1>CAMERON PARK REHAB</h1>
            </Fade>

            <Fade left>
              <h2>MENTAL HEALTH AND SUBSTANCE ABUSE TREATMENT FACILITY</h2>
            </Fade>

            <Fade bottom>
              <p>"Start your treatment journey with us"</p>
            </Fade>
          </div>

            <div className="hero-btn">
            <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
            <Link to="/contact">
                <button class="hero-cta">
                    <span>CONTACT US</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </Link>
            </LinkRoll>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
