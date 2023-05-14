import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth-Provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, signout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleSignOut = () => {
    signout()
      toast("Signed out");
  };
  return (
    <div className="navbar bg-base-100 border border-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-32 ${
              isMenuOpen ? "" : "hidden"
              }`}
            
          >
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "bg-gray-400" : "")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "bg-gray-400" : "")}
                to={"/blog"}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "bg-gray-400" : "")}
                to={"/contact"}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost font-bold normal-case text-xl md:text-2xl text-[#FF5771]"
        >
          Chef ZonE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#616679]">
          <li>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "bg-gray-400" : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "bg-gray-400" : "")}
              to={"/blog"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "bg-gray-400" : "")}
              to={"/contact"}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className=" my-auto mr-3 rounded-full">
            {user ? (
              <div>
                {user.photoURL ? (
                  <div className="w-10  md:w-20">
                    <img
                      // className=" rounded-full"
                      title={user.displayName && user.displayName}
                      src={user.photoURL}
                    />
                  </div>
                ) : (
                  <FaUserCircle
                    title={user.displayName}
                    className="text-4xl md:text-6xl"
                  />
                )}
              </div>
            ) : null}
          </div>
        </div>
        {user ? (
          <p
            onClick={handleSignOut}
            className="btn rounded-lg px-4 bg-[#FF5771] hover:bg-[#b5374a] border-0 text-white"
          >
            Log out
          </p>
        ) : (
          <Link
            to="/login"
            className="btn rounded-lg text-xs md:text-lg px-2 bg-[#FF5771] hover:bg-[#b5374a] border-0 text-white"
          >
            Log in
          </Link>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Header;