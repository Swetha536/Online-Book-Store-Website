import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            At BookNook, we believe every book is a journey waiting to unfold.
            Whether you're a passionate reader, a casual explorer, or someone
            looking to escape the everyday, you'll find the perfect book here.
            From the latest bestsellers to timeless classics, from gripping
            mysteries to heartwarming romances, our shelves are stocked with
            stories that will captivate your mind and soul.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
