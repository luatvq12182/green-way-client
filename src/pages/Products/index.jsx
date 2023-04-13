import React from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
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
                    <Link
                        to='/products/vien-nen-go'
                        className='shadow p-2 rounded bg-white'
                    >
                        <img
                            src='/uploads/products/thumbs/fd7a26917e827d49ccd2bd52e2aa8cbf.jpeg'
                            alt='Viên nén gỗ'
                            className='w-full h-56 lg:h-52 object-cover'
                        />
                        <div className='my-3 text-xl'>Wood Pellet</div>
                        <div className='text-slate-600'>
                            Wood pellets are a type of biofuel produced from
                            natural materials such as sawdust, wood chips, rice
                            husks, corn stalks, etc. These are all leftovers...
                            <span className='text-sm text-green-600'>
                                Read more
                            </span>
                        </div>
                    </Link>
                </div>
                <div className='paginate-container my-5'></div>
            </div>
        </div>
    );
};

export default ProductsPage;
