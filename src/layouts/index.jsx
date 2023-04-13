import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ClientLayout = () => {
    return (
        <div className='bg-stale-100'>
            <Header />

            <main className='mt-[64px]'>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default ClientLayout;
