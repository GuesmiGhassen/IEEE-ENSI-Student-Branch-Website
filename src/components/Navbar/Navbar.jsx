import React from 'react';
import { useState,useEffect } from "react";
import './styles.css'
import {WIE, IAS, CIS, CS} from '../../constantes/index'
import { Link } from 'react-router-dom';
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
        <header className="header fixed top-0 left-0 w-full h-[4rem] shadow-md bg-[#FAFCFF] z-10">
            <nav className="nav container md:mt-[-12px] mt-0">
                <div className="nav__data h-full flex justify-between items-center">
                    <Link to="" onClick={() => window.location.href='/'}><img src="Logo.png" alt="Logo" width={180} /></Link>
                    <div className={`nav__toggle ${isMenuVisible ? 'show-icon' : ''}`} id="nav-toggle" onClick={toggleMenu}>
                      <i className={`ri-menu-line nav__toggle-menu opacity-1 z-50 ${isMenuVisible ? 'hidden' : ''}`}></i>
                      <i className={`ri-close-line nav__toggle-close opacity-1 ${isMenuVisible ? '' : 'hidden'}`}></i>
                    </div>
                </div>
                {/* NAV MENU */}
                <div className={`${isMenuVisible ? 'nav__menu show-menu' : 'nav__menu'}`} id="nav-menu">
                    <ul className="nav__list">
                        <li>
                            <Link to="" onClick={() => window.location.href='/'} className="nav__link">Home</Link>
                        </li>
                        <li>
                          <Link to="" onClick={() => window.location.href='/About'} className="nav__link">About</Link>
                        </li>
                        {/* DROPDOWN */}
                        <li className="dropdown__item">
                            <div className="nav__link dropdown__button">
                                Units <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>
                            <div className="dropdown__container">
                                <div className="dropdown__content">
                                    <Link to='' onClick={() => window.location.href='/IAS'} className="dropdown__group flex items-center md:py-0 py-2 relative gap-2 hover:bg-[#F2F6FD]">
                                        <div className="dropdown__icon md:mt-[0.6rem] mt-[0.2rem]">
                                            <img src={IAS} alt="IAS" className='ias'/>
                                        </div>
                                        <span className="dropdown__title">IAS Chapter</span>
                                    </Link>
                                    <Link to='' onClick={() => window.location.href='/CIS'} className="dropdown__group flex items-center md:py-0 py-2 relative gap-2 hover:bg-[#F2F6FD]">
                                        <div className="dropdown__icon md:mt-[0.6rem] mt-[0.2rem]">
                                        <img src={CIS} alt="CIS" className='cis'/>
                                        </div>
                                        <span className="dropdown__title">CIS Chapter</span>
                                    </Link>
                                    <Link to='' onClick={() => window.location.href='/CS'} className="dropdown__group flex items-center md:py-0 py-2 relative gap-2 hover:bg-[#F2F6FD]">
                                        <div className="dropdown__icon md:mt-[0.6rem] mt-[0.2rem]">
                                          <img src={CS} alt="CS" className='cs'/>
                                        </div>
                                        <span className="dropdown__title">CS Chapter</span>
                                    </Link>
                                    <Link to='' onClick={() => window.location.href='/WIE'} className="dropdown__group flex items-center md:py-0 py-2 relative gap-2 hover:bg-[#F2F6FD]">
                                        <div className="dropdown__icon md:mt-[0.6rem] mt-[0.2rem]">
                                          <img src={WIE} alt="WIE" className='wie'/>
                                        </div>
                                        <span className="dropdown__title">WIE Affinity Group</span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="" onClick={() => window.location.href='/Events'} className="nav__link">
                              Events
                            </Link>
                        </li>
                        <li>
                          <Link to="" onClick={() => window.location.href='/Contact'} className="nav__link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
