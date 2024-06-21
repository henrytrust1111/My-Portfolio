import React from "react";
import Profile from "../../assets/Henry.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import TypeWriterEffect from 'react-typewriter-effect';
import "./home.css";
import { color } from "framer-motion";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
          <TypeWriterEffect
              textStyle={{ fontSize: 'inherit', display: 'inline' }}
              startDelay={100}
              cursorColor="black"
              text="I'm Trust Henry."
              typeSpeed={100}
              hideCursorAfterText={true}
            />
            <span className= "home__title2">
            <TypeWriterEffect
              textStyle={{ fontSize: 'inherit', display: 'inline', color:'var(--first-color)' }}
              startDelay={100}
              cursorColor="black"
              text="Web Developer"
              typeSpeed={100}
              hideCursorAfterText={true}
              
            /></span>
            {/* <span>I'm Trust Henry.</span> Web Developer */}
          </h1>

          <p className="home__description">
            I'm a Nigerian based web designer & front-end developer focused on
            crafting clean & user-friendly experiences, I am passionate about
            building excellent softwares the improves the lives of those around
            me.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
