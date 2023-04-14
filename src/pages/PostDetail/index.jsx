import React from "react";
import { Link, useParams } from "react-router-dom";
import usePost from "@/hooks/usePost";
import LatestNews from "../News/components/LatestNews";

const PostDetail = () => {
    const { id } = useParams();
    const { data: post } = usePost(id);

    if (!post) {
        return "Loading...";
    }

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

            <div className='container-fluid mx-auto mt-2 pt-2 mb-4'>
                <div className='flex gap-10'>
                    <div className='left-content md:block xs-s:hidden'>
                        <LatestNews />
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
                            <span className='text-sm text-gray-500'>
                                24/03/2023
                            </span>
                        </div>

                        <h1 className='text-2xl'>{post.data[0].title}</h1>

                        <blockquote
                            style={{
                                fontStyle: "italic",
                            }}
                        >
                            {post.data[0].shortDescription}
                        </blockquote>

                        <div
                            className='content-body mt-2'
                            dangerouslySetInnerHTML={{
                                __html: post.data[0].body,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
