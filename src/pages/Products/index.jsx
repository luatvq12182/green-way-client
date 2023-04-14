import React from "react";
import { Link } from "react-router-dom";

import usePosts from "@/hooks/usePosts";
import PostCard from "./components/PostCard";

const ProductsPage = () => {
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
            ></div>

            <div className='container-fluid mx-auto pt-2'>
                <div className='crumb-box flex h-10 items-center'>
                    <ul className='crumb'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li>
                    </ul>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm-m:grid-cols-2 xs-s:grid-cols-1 gap-8 mt-3'>
                    {posts.data.items
                        .filter((item) => +item.categoryId === 2)
                        .map((post) => {
                            return (
                                <PostCard
                                    key={post.id}
                                    title={post.title}
                                    href={`/products/${post.title}/${post.id}`}
                                    description={post.shortDescription}
                                    thumbnail={post.thumbnail}
                                />
                            );
                        })}
                </div>
                <div className='paginate-container my-5'></div>
            </div>
        </div>
    );
};

export default ProductsPage;
