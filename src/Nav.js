import React, { useState, useEffect } from "react";
import "./Nav.css";
import NetflixLogo from "./netflixLogo.png";
import NetflixAvatar from "./netflixAvatar.png";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 130) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav">
        <div className="nav_contents">
          <img
            onClick={() => history.push("/")}
            className="nav_logo"
            src={NetflixLogo}
            alt="NETFLIX"
          />
          <img
            onClick={() => history.push("/profile")}
            className="nav_avatar"
            src={NetflixAvatar}
            alt="AVATAR"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
