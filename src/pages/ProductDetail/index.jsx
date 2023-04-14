import React from "react";
import { Link, useParams } from "react-router-dom";
import usePost from "@/hooks/usePost";
import { genSrcImg } from "@/utils";

const ProductDetail = () => {
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
            />

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

                <div className='rounded p-3 mt-2  bg-white mb-5'>
                    <div className='right-content w-full'>
                        <div className='grid md:grid-cols-4 xs-s:grid-cols-1 mt-4'>
                            <div className='col-span-2'>
                                <div className='md:pr-5 xs-s:pr-0'>
                                    <img
                                        style={{
                                            width: "100%",
                                            borderRadius: "12px",
                                        }}
                                        data-id='lightbox-1'
                                        src={genSrcImg(post.data[0].thumbnail)}
                                        alt='Viên nén gỗ'
                                        className='img-product-responsive lightbox'
                                        data-href='/uploads/products/fd7a26917e827d49ccd2bd52e2aa8cbf.jpeg'
                                    />
                                </div>
                            </div>
                            <div className='col-span-2 md:mt-0 xs-s:mt-5'>
                                <h1 className='text-2xl'>
                                    {post.data[0].title}
                                </h1>
                                <div className='my-3'>
                                    <span className='text-2xl text-red-600'></span>
                                </div>
                                <div className='my-3'>
                                    {post.data[0].shortDescription}
                                </div>
                                <div className='mt-5 flex gap-4 items-center social'>
                                    <span>Share:</span>
                                    <a
                                        className='mr-3'
                                        href='http://www.facebook.com/sharer.php?u=https://biomassvina.com/vien-nen-go/1.html'
                                        target='_blank'
                                        title='Share Facebook'
                                        rel='nofollow'
                                    >
                                        <svg
                                            viewBox='0 0 512 512'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <rect
                                                fill='#1877f2'
                                                height={512}
                                                rx='15%'
                                                width={512}
                                            />
                                            <path
                                                d='m355.6 330 11.4-74h-71v-48c0-20.2 9.9-40 41.7-40h32.3v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6v56.4h-65v74h65v182h80v-182z'
                                                fill='#fff'
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className='mr-3'
                                        href='https://twitter.com/share?url=https://biomassvina.com/vien-nen-go/1.html'
                                        target='_blank'
                                        title='Share Twitter'
                                        rel='nofollow'
                                    >
                                        <svg
                                            viewBox='0 0 512 512'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <rect
                                                fill='#1da1f2'
                                                height={512}
                                                rx='15%'
                                                width={512}
                                            />
                                            <path
                                                d='m437 152a72 72 0 0 1 -40 12 72 72 0 0 0 32-40 72 72 0 0 1 -45 17 72 72 0 0 0 -122 65 200 200 0 0 1 -145-74 72 72 0 0 0 22 94 72 72 0 0 1 -32-7 72 72 0 0 0 56 69 72 72 0 0 1 -32 1 72 72 0 0 0 67 50 200 200 0 0 1 -105 29 200 200 0 0 0 309-179 200 200 0 0 0 35-37'
                                                fill='#fff'
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        className='mr-3'
                                        href='https://www.linkedin.com/sharing/share-offsite/?url=https://biomassvina.com/vien-nen-go/1.html'
                                        target='_blank'
                                        title='Share Linkedin'
                                        rel='nofollow'
                                    >
                                        <svg
                                            viewBox='0 0 128 128'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='m116 3h-104a8.91 8.91 0 0 0 -9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81v-104.42a8.93 8.93 0 0 0 -9-8.77z'
                                                fill='#0076b2'
                                            />
                                            <g fill='#fff'>
                                                <path d='m21.06 48.73h18.11v58.27h-18.11zm9.06-29a10.5 10.5 0 1 1 -10.5 10.49 10.5 10.5 0 0 1 10.5-10.49' />
                                                <path d='m50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41 18.34-.04 21.74 12.03 21.74 27.68v32h-18.11v-28.35c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15v28.79h-18.08z' />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 border-t pt-4'>
                            <h2 className='text-2xl'>Product information</h2>
                            <div
                                className='content-body'
                                dangerouslySetInnerHTML={{
                                    __html: post.data[0].body,
                                }}
                            />

                            <div
                                style={{
                                    textAlign: "right",
                                    fontStyle: "italic",
                                }}
                            >
                                <span>Author: {post.data[0].author}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
