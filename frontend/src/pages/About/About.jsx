import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Welcome to BookNook, where every book tells a story and every
              reader finds a home. Our online bookstore was founded by a group
              of passionate book lovers who believe in the transformative power
              of stories. At BookNook, we’re dedicated to bringing you a
              carefully curated selection of books that span genres, interests,
              and imaginations.
            </p>
            <p className="fs-17">
              We pride ourselves on offering personalized recommendations,
              supporting both new and established authors, and fostering a
              community where readers can connect and share their love of
              literature. Whether you’re searching for the latest bestseller or
              a hidden gem, BookNook is your trusted companion in the journey of
              reading. Thank you for making us a part of your literary
              adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
