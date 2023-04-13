import React from "react";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <div>
            <div
                style={{
                    height: "230px",
                    width: "100%",
                    backgroundImage: "url(/category-img.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className='container-fluid mx-auto mt-2 pt-2'>
                <div className='flex gap-10'>
                    <div className='left-content md:block xs-s:hidden'>
                        <div className='border-tab' />
                        <div className='flex justify-between items-center mb-4'>
                            <div>
                                <label className='popular-label'>
                                    <span className='text'>Latest news</span>
                                </label>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <Link
                                className='w-full flex gap-2 my-3'
                                to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                            >
                                <div className='w-100 h-20 border rounded'>
                                    <img
                                        className='h-full w-full rounded object-cover'
                                        src='/uploads/articles/6b7ef3ee7104ceb9d84d46bc978a6bb5.jpg'
                                    />
                                </div>
                                <div>
                                    <span className='limit-line limit-line-4 text-base'>
                                        Decipher the hotness of Binchotan white
                                        charcoal
                                    </span>
                                </div>
                            </Link>
                            <Link
                                className='w-full flex gap-2 my-3'
                                to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                            >
                                <div className='w-100 h-20 border rounded'>
                                    <img
                                        className='h-full w-full rounded object-cover'
                                        src='/uploads/articles/229b281ca45c4604dfefbdcfdf5bdcdd.webp'
                                    />
                                </div>
                                <div>
                                    <span className='limit-line limit-line-4 text-base'>
                                        Sawdust charcoal an alternative to coal?
                                    </span>
                                </div>
                            </Link>
                            <Link
                                className='w-full flex gap-2 my-3'
                                to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                            >
                                <div className='w-100 h-20 border rounded'>
                                    <img
                                        className='h-full w-full rounded object-cover'
                                        src='/uploads/articles/4d530a513ff4b3ae6fa5f003b511861f.jpg'
                                    />
                                </div>
                                <div>
                                    <span className='limit-line limit-line-4 text-base'>
                                        Why should use smokeless coal?
                                    </span>
                                </div>
                            </Link>
                            <Link
                                className='w-full flex gap-2 my-3'
                                to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                            >
                                <div className='w-100 h-20 border rounded'>
                                    <img
                                        className='h-full w-full rounded object-cover'
                                        src='/uploads/articles/552ae2e118300c3207b8a60831597002.png'
                                    />
                                </div>
                                <div>
                                    <span className='limit-line limit-line-4 text-base'>
                                        Why use wood pellets?
                                    </span>
                                </div>
                            </Link>
                        </div>{" "}
                    </div>
                    <div className='right-content w-full'>
                        <div className='crumb-box flex h-10 items-center justify-between items-center'>
                            <ul className='crumb'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/news'>News</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='content-body'>
                            <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
                                <Link
                                    to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                                    className='xs:w-40 xs-s:w-full min-w-40'
                                >
                                    <img
                                        src='/uploads/articles/thumbs/6b7ef3ee7104ceb9d84d46bc978a6bb5.jpg'
                                        className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                                    />
                                </Link>
                                <div>
                                    <Link to='/news/vi-sao-nen-su-dung-than-khong-khoi'>
                                        <h2 className='text-base font-medium'>
                                            Decipher the hotness of Binchotan
                                            white charcoal
                                        </h2>
                                    </Link>
                                    <div className='text-sm text-gray-500 mt-2'>
                                        Binchotan Charcoal is produced by
                                        burning the branches or trunks of a tree
                                        at extremely high temperatures for
                                        several days followed by rapid cooling.
                                        Binchotan charcoal is many times harder
                                        than ordinary charcoal, when knocking 2
                                        coals together, there will be a metallic
                                        sound. In addition, Binchotan - White
                                        Charcoal also has many uses such as
                                        water purification, exhaust gas
                                        filtration, deodorant, skin care,
                                        metallurgy, used in battery
                                        manufacturing.
                                    </div>
                                </div>
                            </div>
                            <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
                                <Link
                                    to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                                    className='xs:w-40 xs-s:w-full min-w-40'
                                >
                                    <img
                                        src='/uploads/articles/thumbs/229b281ca45c4604dfefbdcfdf5bdcdd.webp'
                                        className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                                    />
                                </Link>
                                <div>
                                    <Link to='/news/vi-sao-nen-su-dung-than-khong-khoi'>
                                        <h2 className='text-base font-medium'>
                                            Sawdust charcoal an alternative to
                                            coal?
                                        </h2>
                                    </Link>
                                    <div className='text-sm text-gray-500 mt-2'>
                                        This is a clean coal product that
                                        appeared in the 50s in Japan. When
                                        applying binchotan white charcoal
                                        production technology to produce sawdust
                                        charcoal.
                                    </div>
                                </div>
                            </div>
                            <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
                                <Link
                                    to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                                    className='xs:w-40 xs-s:w-full min-w-40'
                                >
                                    <img
                                        src='/uploads/articles/thumbs/4d530a513ff4b3ae6fa5f003b511861f.jpg'
                                        className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                                    />
                                </Link>
                                <div>
                                    <Link to='/news/vi-sao-nen-su-dung-than-khong-khoi'>
                                        <h2 className='text-base font-medium'>
                                            Why should use smokeless coal?
                                        </h2>
                                    </Link>
                                    <div className='text-sm text-gray-500 mt-2'>
                                        Many people think that Smokeless Coal
                                        merely helps to reduce their discomfort
                                        during use. However, it also has a lot
                                        of little-known benefits, Smokeless Coal
                                        brings countless benefits and is a great
                                        choice for restaurants, shops, and
                                        families who want to make the most of
                                        its fuel source.
                                    </div>
                                </div>
                            </div>
                            <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
                                <Link
                                    to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                                    className='xs:w-40 xs-s:w-full min-w-40'
                                >
                                    <img
                                        src='/uploads/articles/thumbs/552ae2e118300c3207b8a60831597002.png'
                                        className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                                    />
                                </Link>
                                <div>
                                    <Link to='/news/vi-sao-nen-su-dung-than-khong-khoi'>
                                        <h2 className='text-base font-medium'>
                                            Why use wood pellets?
                                        </h2>
                                    </Link>
                                    <div className='text-sm text-gray-500 mt-2'>
                                        On the market today, there are many
                                        different types of fuel used as fuel in
                                        household activities as well as in
                                        processing and manufacturing industries.
                                        Sawdust pellets are now being widely
                                        used in social life due to its many
                                        practical benefits.
                                    </div>
                                </div>
                            </div>
                            <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
                                <Link
                                    to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                                    className='xs:w-40 xs-s:w-full min-w-40'
                                >
                                    <img
                                        src='/uploads/articles/thumbs/1420afd9d55c975147038fc86e98f325.png'
                                        className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                                    />
                                </Link>
                                <div>
                                    <Link to='/news/vi-sao-nen-su-dung-than-khong-khoi'>
                                        <h2 className='text-base font-medium'>
                                            FSC wood pellets trends,
                                            opportunities and challenges
                                        </h2>
                                    </Link>
                                    <div className='text-sm text-gray-500 mt-2'>
                                        Currently, the production and trade
                                        trend of wood pellets in Vietnam is
                                        quite developed since European countries
                                        announced to use 20% of fossil fuels by
                                        2020. Furniture and woodchip factories
                                        have made full use of wood pellets use
                                        more waste materials in production to
                                        make wood pellets for industrial and
                                        civil use.
                                    </div>
                                </div>
                            </div>
                            <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
                                <Link
                                    to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                                    className='xs:w-40 xs-s:w-full min-w-40'
                                >
                                    <img
                                        src='/uploads/articles/thumbs/be59f10b51e0f271189c9e8faaa36aad.jpg'
                                        className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                                    />
                                </Link>
                                <div>
                                    <Link to='/news/vi-sao-nen-su-dung-than-khong-khoi'>
                                        <h2 className='text-base font-medium'>
                                            What is ENplus certification?
                                        </h2>
                                    </Link>
                                    <div className='text-sm text-gray-500 mt-2'>
                                        ENplus certification is a European-wide
                                        quality certification standard for wood
                                        pellets, based on ISO 17225-2
                                    </div>
                                </div>
                            </div>
                            <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
                                <Link
                                    to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                                    className='xs:w-40 xs-s:w-full min-w-40'
                                >
                                    <img
                                        src='/uploads/articles/thumbs/2039741d5b7a5fb734ab9bbf3447bc59.png'
                                        className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                                    />
                                </Link>
                                <div>
                                    <Link to='/news/vi-sao-nen-su-dung-than-khong-khoi'>
                                        <h2 className='text-base font-medium'>
                                            What is wood pellets?
                                        </h2>
                                    </Link>
                                    <div className='text-sm text-gray-500 mt-2'>
                                        Wood Pellets is a biofuel produced from
                                        natural materials such as sawdust, wood
                                        chips, rice husks, corn stalks, etc
                                    </div>
                                </div>
                            </div>
                            <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
                                <Link
                                    to='/news/vi-sao-nen-su-dung-than-khong-khoi'
                                    className='xs:w-40 xs-s:w-full min-w-40'
                                >
                                    <img
                                        src='/uploads/articles/thumbs/7ddb3f5dfecdf2ac9a09895537a01d06.jpeg'
                                        className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                                    />
                                </Link>
                                <div>
                                    <Link to='/news/vi-sao-nen-su-dung-than-khong-khoi'>
                                        <h2 className='text-base font-medium'>
                                            What is Biomass Fuel?
                                        </h2>
                                    </Link>
                                    <div className='text-sm text-gray-500 mt-2'>
                                        Biomass, also known as biomass fuel, is
                                        biological material obtained from plants
                                        and trees. It can generate heat, so it
                                        is often exploited to become a
                                        combustion fuel
                                    </div>
                                </div>
                            </div>
                            <div className='paginate-container my-5'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
