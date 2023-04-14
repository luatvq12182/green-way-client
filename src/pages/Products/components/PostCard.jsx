import React from "react";
import { Link } from "react-router-dom";

import { genSrcImg } from "@/utils";

const PostCard = ({ title, href, description, thumbnail }) => {
    return (
        <Link
            to={href}
            className='shadow p-2 rounded bg-white'
        >
            <img
                src={genSrcImg(thumbnail)}
                alt={title}
                className='w-full h-56 lg:h-52 object-cover'
            />
            <div className='my-3 text-xl'>{title}</div>
            <div className='text-slate-600'>
                {description}
                <span className='text-sm text-green-600'>Read more</span>
            </div>
        </Link>
    );
};

export default PostCard;
