import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CSW from '../../../assets/Logos/CSWhite.png'
import CSB from '../../../assets/Logos/cs.png'
import Logo from '../../../assets/Logos/LogoWhite.png'
import { Link } from 'react-router-dom';
const pcnavigation = [
    { name: 'Home', href: '#Home' },
    { name: 'Activities', href: '#Activities' },
    { name: 'About', href: '#About' },
    { name: 'Team', href: '#Team' },
  ]
  const mobilenavigation = [
    { name: 'Home', href: '#Home' },
    { name: 'Activities', href: '#Activities' },
    { name: 'About', href: '#About' },
    { name: 'Team', href: '#Team' },
    { name: 'IEEE ENSI SB', href: '/' },
  ]
  

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleLinkClick = () => {
        // Close the mobile menu when a link is clicked
        setMobileMenuOpen(false);
    };
    return (
        <header className="fixed bg-[#00000080] h-[4.5rem] inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between px-6 lg:px-8 md:py-0 py-4" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link to="" onClick={() => window.location.href='/CS'} className="-m-1.5 p-1.5">
                <img
                    src={CSW}
                    alt="cs"
                    className='md:w-[140px] w-[130px]'
                />
                </Link>
            </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
                >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
            {pcnavigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-semibold leading-6 hover:text-[#FAA41A] text-white">
                    {item.name}
                </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link to="" onClick={() => window.location.href='/'}> 
                <span className="sr-only">IEEE ENSI SB</span>
                <img
                    width="150"
                    height="180"
                    src={Logo}
                    alt=""
                />
                </Link>
            </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <Link to="" onClick={() => window.location.href='/CS'} className="-m-1.5 p-1.5">
                    <img
                    className="h-8 w-auto"
                    src={CSB}
                    alt="cs"
                    />
                </Link>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                    {mobilenavigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => {
                        handleLinkClick(); // Close the mobile menu when a link is clicked
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
                </div>  
            </div>
            </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar