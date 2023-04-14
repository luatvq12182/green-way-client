import React from "react";
import { Link } from "react-router-dom";
import { genSrcImg } from "@/utils";

const NewsCard = ({ title, href, description, thumbnail }) => {
    return (
        <div className='xs:flex xs-s:grid gap-5 mt-4 sm:mb-10 xs-s:mb-5 xs-s:border-b sm:border-none xs-s:pb-5 sm:pb-0'>
            <Link
                to={href}
                className='xs:w-40 xs-s:w-full min-w-40'
            >
                <img
                    src={genSrcImg(thumbnail)}
                    className='xs:h-24 xs-s:h-36 w-full rounded object-cover'
                />
            </Link>
            <div>
                <Link to={href}>
                    <h2 className='text-base font-medium'>{title}</h2>
                </Link>
                <div className='text-sm text-gray-500 mt-2'>{description}</div>
            </div>
        </div>
    );
};

export default NewsCard;
