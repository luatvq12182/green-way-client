import React from "react";
import { Link } from "react-router-dom";

import usePosts from "@/hooks/usePosts";
import NewsCard from "./components/NewsCard";
import LatestNews from "./components/LatestNews";

const News = () => {
    const { data: posts } = usePosts();

    if (!posts) {
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
            />

            <div className='container-fluid mx-auto mt-2 pt-2'>
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
                        </div>
                        <div className='content-body'>
                            {posts.data.items
                                .filter((item) => {
                                    return +item.categoryId === 3;
                                })
                                .map((item) => {
                                    return (
                                        <NewsCard
                                            key={item.id}
                                            title={item.title}
                                            href={`/news/${item.title}/${item.id}`}
                                            description={item.shortDescription}
                                            thumbnail={item.thumbnail}
                                        />
                                    );
                                })}

                            <div className='paginate-container my-5'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
