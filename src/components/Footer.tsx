import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  
  return (
    <footer className="py-5 bg-[#1d1c20]">
      <div className="container">
        <div className="flex justify-between gap-5">
          <Link to='/'>
            <img src="/svg/logo.svg" width={130} height={50} alt="" />
          </Link>
          <p>© 2023 Matrixly AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
