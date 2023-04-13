import React from "react";

const Intro = () => {
    return (
        <div>
            <div className='mx-auto container-fluid'>
                <div className='grid md:grid-cols-3 xs-s:grid-cols-1 md:gap-10 xs-s:gap-9 py-10'>
                    <div className='p-4 rounded-lg bg-white md:border-t-4 md:border-green-600'>
                        <a href='https://biomassvina.com/page/ve-chung-toi/1.html'>
                            <h1 className='text-xl uppercase text-gray-800 hover:text-green-700 text-center mb-1 mt-2'>
                                About Us
                            </h1>
                        </a>
                        <div className='leading-7 text-slate-600 text-base px-5 py-3'>
                            Biomass Vina is a one-member limited liability
                            company located in Hanoi, although it is a newly
                            established enterprise, the founding team has
                            experience in manufacturing, trading and exporting
                            wood pellets.
                            <span className='inline-block text-sm'>
                                [
                                <a
                                    className='text-green-700'
                                    href='https://biomassvina.com/page/ve-chung-toi/1.html'
                                >
                                    Read more
                                </a>
                                ]
                            </span>
                        </div>
                    </div>
                    <div className='p-4 rounded-lg bg-white md:border-t-4 md:border-green-600'>
                        <a href='https://biomassvina.com/page/kinh-te-xanh-nang-luong-xanh/2.html'>
                            <h1 className='text-xl uppercase text-gray-800 hover:text-green-700 text-center mb-1 mt-2'>
                                Green Economic &amp; Green Energy
                            </h1>
                        </a>
                        <div className='leading-7 text-slate-600 text-base px-5 py-3'>
                            A concept that has become familiar to world
                            economies. It is an economy that aims to improve
                            people's lives and social assets, while at the same
                            time, focusing on reducing environmental hazards and
                            resource scarcity
                            <span className='inline-block text-sm'>
                                [
                                <a
                                    className='text-green-700'
                                    href='https://biomassvina.com/page/kinh-te-xanh-nang-luong-xanh/2.html'
                                >
                                    Read more
                                </a>
                                ]
                            </span>
                        </div>
                    </div>
                    <div className='p-4 rounded-lg bg-white md:border-t-4 md:border-green-600'>
                        <a href='https://biomassvina.com/page/vien-nen-go/3.html'>
                            <h1 className='text-xl uppercase text-gray-800 hover:text-green-700 text-center mb-1 mt-2'>
                                Wood Pellet
                            </h1>
                        </a>
                        <div className='leading-7 text-slate-600 text-base px-5 py-3'>
                            Wood pellets are biofuel products, produced from
                            wood waste materials such as sawdust, wood chips,
                            rice husks, stubble, etc. Standard size of wood
                            pellets is 6-8mm in diameter, 10 to 32mm in length.
                            <span className='inline-block text-sm'>
                                [
                                <a
                                    className='text-green-700'
                                    href='https://biomassvina.com/page/vien-nen-go/3.html'
                                >
                                    Read more
                                </a>
                                ]
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
