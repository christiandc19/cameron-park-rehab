import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import "./Menus.css";

import Contact2 from "../contact/Contact2";

import Card1 from "../../assets/card1.jpg";
import Card2 from "../../assets/card2.jpg";
import Card3 from "../../assets/card3.jpg";

const Menus = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          CAMERON PARK REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS
        </h1>
        <p>
          At Cameron Park Rehab Treatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.
        </p>
      </div>

      <div class="mh-card-wrap">
        <div class="mh-tile">
          <Fade left>
            <img src={Card1} alt="Mental Health" loading="lazy" />
          </Fade>
          <div class="mh-text">
            <h1>Partial Hospitalizaion Program​</h1>
            <p class="mh-animate-text">
              Some of our clients are here to attend to their mental health, and
              some come to us for help with addiction and sobriety.
            </p>
            <div class="mh-animate-text">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health-php">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>

        <div class="mh-tile">
          <Fade top>
            <img src={Card2} alt="Substance Use" loading="lazy" />
          </Fade>
          <div class="mh-text">
            <h1>Intensive Outpatient Program</h1>
            <p class="mh-animate-text">
              No matter what type of addiction or mental health condition you
              are dealing with, there’s something for everyone at Cameron Park.
            </p>
            <div class="mh-animate-text">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health-iop">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>

        <div class="mh-tile">
          <Fade right>
            <img src={Card3} alt="Warehouse Employees" loading="lazy" />
          </Fade>
          <div class="mh-text">
            <h1>Outpatient Program</h1>
            <p class="mh-animate-text">
              We offer a variety of employment tools and resources to help you
              land on your feet and get hired at a great company in recovery.
            </p>
            <div class="mh-animate-text">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health-op">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
      </div>

      {/* MENTAL HEALTH CARDS */}

      <div className="menu-mh">
        <div className="menu-mh-content container">
          <div className="menu-mh-flex">
            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>DEPRESSION</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/depression">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>ANXIETY</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/anxiety">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>PANIC DISORDER</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/panic-disorder">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>ACUTE STRESS DISORDER</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/acute-stress-disorder">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>ADHD</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/adhd">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>ANGER DISORDER</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/anger-disorder">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>BIPOLAR DISORDER</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/bipolar-disorder">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>PTSD</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/ptsd">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>SCHIZOAFFECTIVE</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/schizoaffective">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-mh-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>MENTAL HEALTH TREATMENT</h1>
                <h2>SCHIZOPHRENIA</h2>
                <div className="menu-mh-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/schizophrenia">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact2 />
    </>
  );
};

export default Menus;
