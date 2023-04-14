import React from "react";
import { Link } from "react-router-dom";
import { genSrcImg } from "@/utils";

const LatestNewsCard = ({ href, title, thumbnail }) => {
    return (
        <Link
            className='w-full flex gap-2 my-3'
            to={href}
        >
            <div className='w-100 h-20 border rounded'>
                <img
                    className='h-full w-full rounded object-cover'
                    src={genSrcImg(thumbnail)}
                />
            </div>
            <div>
                <span className='limit-line limit-line-4 text-base'>
                    {title}
                </span>
            </div>
        </Link>
    );
};

export default LatestNewsCard;
