import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/shop'>Our Shop</Link></li>

        <li><a>Item 3</a></li>

    </>
    return (
        <>
            <div className="navbar bg-black text-white fixed z-10 bg-opacity-10 max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-yellow-400 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='relative uppercase '>
                        <Link className="btn btn-ghost  mb-1">
                            <h1 className='text-xl font-bold'>bistro boss</h1>

                        </Link>
                        <span className='block bottom-0 absolute ml-4 '>Restaurant</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-yellow-400">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;