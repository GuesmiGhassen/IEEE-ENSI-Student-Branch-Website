import React from 'react';
import { useState,useEffect } from "react";
import './styles.css'
import { Link } from 'react-router-dom';
import GODS from '../../../assets/Logos/GODS.png'
const Navbar = () => {
/*=============== SHOW MENU ===============*/

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

/*=============== SHOW DROPDOWN MENU ===============*/
useEffect(() => {
  const dropdownItems = document.querySelectorAll('.dropdown__item');

  const toggleItem = (item) => {
    const dropdownContainer = item.querySelector('.dropdown__container');

    if (item.classList.contains('show-dropdown')) {
      dropdownContainer.removeAttribute('style');
      item.classList.remove('show-dropdown');
    } else {
      dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
      item.classList.add('show-dropdown');
    }
  };

  const handleDropdownButtonClick = (item) => {
    const showDropdown = document.querySelector('.show-dropdown');

    toggleItem(item);

    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  };

  dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button');

    dropdownButton.addEventListener('click', () => {
      handleDropdownButtonClick(item);
    });
  });
}, []);

    return (
        <header className="header fixed top-0 left-0 w-full h-[4.5rem] shadow-md bg-[#f2f2f2] z-10">
            <nav className="nav container md:mt-[-8px] mt-0">
                <div className="nav__data h-full flex justify-between items-center">
                    <Link to="" onClick={() => window.location.href='/GODS'}><img src={GODS} alt="Logo" width={200}/></Link>
                    <div className={`nav__toggle ${isMenuVisible ? 'show-icon' : ''}`} id="nav-toggle" onClick={toggleMenu}>
                      <i className={`ri-menu-line nav__toggle-menu opacity-1 z-50 ${isMenuVisible ? 'hidden' : ''}`}></i>
                      <i className={`ri-close-line nav__toggle-close opacity-1 ${isMenuVisible ? '' : 'hidden'}`}></i>
                    </div>
                </div>
                {/* NAV MENU */}
                <div className={`${isMenuVisible ? 'nav__menu show-menu' : 'nav__menu'}`} id="nav-menu">
                    <ul className="nav__list">
                        <li>
                            <Link to="" onClick={() => window.location.href='/GODS'} className="nav__link">Home</Link>
                        </li>
                        <li>
                          <Link to="" onClick={() => window.location.href='/GODS/Program'} className="nav__link">Program</Link>
                        </li>
                        {/* DROPDOWN */}
                        <li>
                          <Link to="" onClick={() => window.location.href='/GODS/AboutUs'} className="nav__link">About</Link>
                        </li>
                        <li>
                            <Link to="" onClick={() => window.location.href='/GODS/ContactUs'} className="nav__link">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                  <ul className="nav__list hidden">
                    <div className='Reg_buttom pointer'>
                      <li>
                        <Link to="" onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSe3_DjM-lXMlI6aqRpDuod9F9BJvLOeYBZyj_AMpI6Hye6GnQ/viewform'} className="nav__link1"><span className='text-[#feda5e]'>Registration</span></Link>
                      </li>
                    </div>
                    
                  </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
