import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Link to="/" className="footer">
      <span>Peter's</span>
      <br />
      <span>Awwwards</span>
      <br />
      <span>Clones</span>
    </Link>
  );
};

export default Footer;
