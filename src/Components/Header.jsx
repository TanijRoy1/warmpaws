import React, { useContext } from "react";
import { FaPaw } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Header = () => {
  const { user, setUser, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signed out successfully.");
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to={`/`}
          className={`myNavLink mx-1 font-semibold text-black lg:text-white hover:bg-[#E38B29]`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/services`}
          className={`myNavLink mx-1 font-semibold text-black lg:text-white hover:bg-[#E38B29]`}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/profile`}
          className={`myNavLink mx-1 font-semibold text-black lg:text-white hover:bg-[#E38B29]`}
        >
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#184E77] text-white poppins-font">
      <MyContainer>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost px-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow space-y-2"
              >
                {links}
              </ul>
            </div>
            <Link
              to={`/`}
              className="animate__animated animate__flip sm:text-2xl text-xl font-bold text-[#F7B267] flex items-center gap-1"
            >
              <FaPaw className="sm:text-3xl text-xl text-[#F7B267]" />
              <span className="">WarmPaws</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="animate__animated animate__bounceInRight menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full bg-orange-200 border-2 border-orange-600 cursor-pointer"
                    alt=""
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu rounded-box w-52 p-2 shadow-sm bg-blue-950 transform translate-x-[-72%] translate-y-0.5"
                >
                  <li>
                    <p className="font-semibold text-lg mb-2">
                      {user.displayName}
                    </p>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn bg-orange-600 hover:bg-orange-400 border-0 text-white"
                    >
                      SignOut
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to={`/login`}
                className="btn bg-orange-600 hover:bg-orange-400 border-0 text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Header;
