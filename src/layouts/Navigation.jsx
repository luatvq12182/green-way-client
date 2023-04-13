import React from "react";
import { NavLink } from "react-router-dom";

import navigation from "@/configs/navigation";

const Navigation = () => {
    return (
        <ul className='flex items-center gap-2 text-base'>
            {navigation.map(({ label, to }) => {
                return (
                    <li
                        className='nav-link'
                        key={to}
                    >
                        <NavLink
                            className='border-transparent  px-4 py-2  border-t-2  hover:border-zinc-100 hover:bg-zinc-100'
                            to={to}
                        >
                            {label}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default Navigation;
