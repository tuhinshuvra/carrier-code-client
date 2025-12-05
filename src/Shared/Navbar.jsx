import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import PrivateRoute from '../pages/Routes/PrivateRoute';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    // console.log("Navbar login user  :  ", user?.email);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {
            user &&
            <li><NavLink to={'/myApplications'}>My Applications</NavLink></li>
        }
        {
            user &&
            <li><NavLink to={'/addJob'}>Add Job</NavLink></li>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log("SignOut Result :  ", result);
            })
            .then(error => {
                console.log("Signout Error : ", error);
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Carrier Code</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-extrabold text-primary active:underline ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <>
                        <p className=' mx-2  text-primary font-extrabold  p-2 '>{user?.email}</p>
                        <NavLink onClick={handleLogOut} className="btn">LogOut</NavLink>

                    </>}
                    {!user && <>
                        <NavLink to={'/register'} className="btn">Register</NavLink>
                        <NavLink to={'/signin'} className="btn">SignIn</NavLink>
                    </>}
                </div>
            </div>
        </div >
    );
};

export default Navbar;