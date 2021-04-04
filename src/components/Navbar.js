import React from "react";
import { Link } from "react-router-dom";
import Ran from "../asset/Ran.jpeg";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <ul>
        <li>
          <Link to='/gmail' className='nav-link'>
            Gmail
          </Link>
        </li>
        <li>
          <Link to='/images' className='nav-link'>
            Images
          </Link>
        </li>
        <li>
          <div className='show-shadow'>
            <Link to='/apps' className='nav-link icon'>
              <span class='material-icons '>&#xE5C3;</span>
            </Link>
          </div>
        </li>

        <li>
          <Link to='/account' className='nav-link'>
            <img src={Ran} alt='acount-img' className='account-img' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
