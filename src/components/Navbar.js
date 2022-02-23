import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { links } from '../utils/constants';
import { GoThreeBars } from 'react-icons/go';
import CartButtons from './CartButtons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='nav-logo'>
            <Link to='/'>
              <img src={logo} alt='readerSpace' className='logo' />
            </Link>
          </div>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <GoThreeBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? 'links-container show-container' : 'links-container'
          }`}
        >
          <ul className='nav-links'>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <CartButtons />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
