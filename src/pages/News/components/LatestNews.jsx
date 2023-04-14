import React from "react";
import usePosts from "@/hooks/usePosts";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
    const { data: posts } = usePosts();

    if (!posts) {
        return "Loading...";
    }

    return (
        <>
            <div className='border-tab' />
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <label className='popular-label'>
                        <span className='text'>Latest news</span>
                    </label>
                </div>
            </div>
            <div className='mb-5'>
                {posts.data.items
                    .filter((item) => {
                        return +item.categoryId === 3;
                    })
                    .map((p) => {
                        return (
                            <LatestNewsCard
                                href={`/news/${p.title}/${p.id}`}
                                title={p.title}
                                thumbnail={p.thumbnail}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default LatestNews;
