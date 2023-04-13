import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div
                id='header'
                className='bg-white fixed top-0 right-0 left-0 z-30'
            >
                <div className='main-header mx-auto  bg-white'>
                    <div className='flex justify-between gap-2 items-center'>
                        <div className='py-2 md:w-20 xs-s:w-full flex justify-center'>
                            <Link
                                to='/'
                                className='flex'
                            >
                                <img
                                    src='/logo.png'
                                    alt='BIOMASS VINA CO. LTD.,'
                                    className='h-12'
                                />
                            </Link>
                        </div>
                        <div className=' gap-10 md:flex xs-s:hidden'>
                            <Navigation />

                            <ul className='flex gap-5 items-center'>
                                <li>
                                    <a href='/lang/vi'>
                                        <img
                                            className='w-9 h-[24px] hover:opacity-50'
                                            src='/images/vietnam.svg'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href='/lang/en'>
                                        <img
                                            className='w-9 h-[24px] hover:opacity-50'
                                            src='/images/kingdom.svg'
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className='text-3xl md:hidden xs-s:block'
                            onclick='openMenu()'
                        >
                            <i className='fa fa-bars' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
