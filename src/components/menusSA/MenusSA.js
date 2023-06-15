import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Link as LinkRoll } from "react-scroll";
import "./MenusSA.css";

import Contact2 from "../contact/Contact2";

import Card1 from "../../assets/card1.jpg";
import Card2 from "../../assets/card2.jpg";
import Card3 from "../../assets/card3.jpg";

const MenusSA = () => {
  return (
    <>
      <div className="sa-cards-header container">
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

      {/* PHP, IOP, OP */}

      <div class="sa-card-wrap">
        <div class="sa-tile">
          <Fade left>
            <img src={Card1} alt="Mental Health" loading="lazy" />
          </Fade>
          <div class="sa-text">
            <h1>Partial Hospitalizaion Program​</h1>
            <p class="sa-animate-text">
              Some of our clients are here to attend to their mental health, and
              some come to us for help with addiction and sobriety.
            </p>
            <div class="sa-animate-text">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/substance-abuse-php">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>

        <div class="sa-tile">
          <Fade top>
            <img src={Card2} alt="Substance Use" loading="lazy" />
          </Fade>
          <div class="sa-text">
            <h1>Intensive Outpatient Program</h1>
            <p class="sa-animate-text">
              No matter what type of addiction or mental health condition you
              are dealing with, there’s something for everyone at Cameron Park.
            </p>
            <div class="sa-animate-text">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/substance-abuse-iop">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>

        <div class="sa-tile">
          <Fade right>
            <img src={Card3} alt="Warehouse Employees" loading="lazy" />
          </Fade>
          <div class="sa-text">
            <h1>Outpatient Program</h1>
            <p class="sa-animate-text">
              We offer a variety of employment tools and resources to help you
              land on your feet and get hired at a great company in recovery.
            </p>
            <div class="sa-animate-text">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/substance-abuse-op">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
      </div>

      {/* SUBSTANCE ABUSE CARDS */}

      <div className="menu-sa">
        <div className="menu-sa-content container">
          <div className="menu-sa-flex">
            <div className="menu-sa-flexItem">
              <div>
                <Fade left>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Alcohol Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/alcohol">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
                    alt="Alcoholism"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Cocaine Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/cocaine">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg"
                    alt="Fentanyl"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Fentanyl Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/fentanyl">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Heroin Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/heroin">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Kratom Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/kratom">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>MDMA Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/mdma">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>METH Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/meth">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Opiate Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/opiate">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Opioid Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/opioid">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Oxycodone Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/oxycodone">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Prescriptions Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/prescriptions">
                      <button>LEARN MORE</button>
                    </Link>
                  </LinkRoll>
                </div>
              </div>
            </div>

            <div className="menu-sa-flexItem">
              <div>
                <Fade top>
                  <img
                    src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
                    alt="Heroin"
                    loading="lazy"
                  />
                </Fade>
                <h1>SUBSTANCE ABUSE TREATMENT</h1>
                <h2>Xanax Addiction</h2>
                <div className="menu-sa-btn">
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/xanax">
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

export default MenusSA;
