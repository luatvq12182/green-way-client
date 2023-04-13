import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className='bg-slate-50 py-10'>
                <div className='mx-auto container-fluid'>
                    <div className='grid sm:grid-cols-4 sm-m:grid-cols-2 xs-s:grid-cols-1 gap-10'>
                        <div>
                            <div className='text-xl font-light text-slate-700 uppercase'>
                                Office
                            </div>
                            <div className='text-gray-500 leading-7 mt-4'>
                                <p>BIOMASS VINA CO. LTD.,</p>
                                <p>
                                    VNST Building, BTSL2-2, Tan Tay Do new urban
                                    area, Tan Lap, Dan Phuong, Hanoi, Vietnam
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='text-xl font-light text-slate-700 uppercase'>
                                Factory
                            </div>
                            <div className='text-gray-500 leading-7 mt-4'>
                                <p>N/A</p>
                            </div>
                        </div>
                        <div>
                            <div className='text-xl font-light text-slate-700 uppercase'>
                                Contact
                            </div>
                            <div className='text-gray-500 leading-7 mt-4'>
                                <div className='flex items-center'>
                                    <i className='fa fa-phone mr-2' />
                                    <a href='tel:0968151073'>0968151073</a>
                                </div>
                                <div className='flex items-center'>
                                    <i className='fa fa-envelope-o mr-2' />
                                    <span>
                                        info@biomassvina.com and
                                        sale@biomassvina.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='text-xl font-light text-slate-700 uppercase'>
                                Quick Links
                            </div>
                            <div className='text-gray-500 leading-7 mt-4'>
                                <div className='flex gap-3'>
                                    <a
                                        nofollow=''
                                        target='_blank'
                                        href='https://facebook.com/biomassvina'
                                    >
                                        <img
                                            className='w-9 hover:opacity-50'
                                            src='/images/facebook.svg'
                                        />
                                    </a>
                                    <a
                                        nofollow=''
                                        target='_blank'
                                        href='https://youtube.com/user/biomassvina'
                                    >
                                        <img
                                            className='w-9 hover:opacity-50'
                                            src='/images/youtube.svg'
                                        />
                                    </a>
                                    <a
                                        nofollow=''
                                        target='_blank'
                                        href='https://twitter.com/user/biomassvina'
                                    >
                                        <img
                                            className='w-9 hover:opacity-50'
                                            src='/images/twitter.svg'
                                        />
                                    </a>
                                    <a
                                        nofollow=''
                                        target='_blank'
                                        href='https://www.whatsapp.com/'
                                    >
                                        <img
                                            className='w-9 hover:opacity-50'
                                            src='/images/whatsapp.svg'
                                        />
                                    </a>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed inset-0 z-30 menu-mobile hidden'>
                <div className=' absolute top-0 right-0 bottom-0 bg-white z-30 w-60'>
                    <span
                        onclick='closeMenu()'
                        className='fixed top-3 right-3 z-30'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </span>
                    <ul className='flex gap-5 items-center py-5 justify-center'>
                        <li>
                            <a href='/lang/vi'>
                                <img
                                    className='w-8 h-[22px] hover:opacity-50'
                                    src='/images/vietnam.svg'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='/lang/en'>
                                <img
                                    className='w-8 h-[22px] hover:opacity-50'
                                    src='/images/kingdom.svg'
                                />
                            </a>
                        </li>
                    </ul>
                    <ul className='text-base'>
                        <li className='border-t'>
                            <a
                                className='px-4 py-2 flex items-center'
                                href='https://biomassvina.com'
                            >
                                <i className='fa fa-home mr-2' />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className='border-t'>
                            <a
                                className='px-4 py-2 flex items-center'
                                href='https://biomassvina.com/products'
                            >
                                <i className='fa fa-th-large mr-2' />
                                <span>Products</span>
                            </a>
                        </li>
                        <li className='border-t'>
                            <a
                                className='px-4 py-2 flex items-center'
                                href='https://biomassvina.com/articles'
                            >
                                <i className='fa fa-file-o mr-2' />
                                <span>News</span>
                            </a>
                        </li>
                        <li className='border-t border-b'>
                            <a
                                className='px-4 py-2 flex items-center'
                                href='https://biomassvina.com/contact'
                            >
                                <i className='fa fa-address-book-o mr-2' />
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    onclick='closeMenu()'
                    className='fixed inset-0 opacity-25 bg-black z-10'
                />
            </div>{" "}
        </footer>
    );
};

export default Footer;
