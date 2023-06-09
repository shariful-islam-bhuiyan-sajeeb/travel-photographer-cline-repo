import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProviders";
import header from "../../Home/images/photography-logo-png-logo-png-2.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };

  return (
    <div className=" bg-slate-50 sticky top-0 z-50 ">
      <div className="flex items-center justify-around w-full  max-w-[1400px] mx-auto">
        <div className="flex items-center justify-center w-full mx-auto">
          {/* dropdown menu icon is here  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="font-semibold">
                <Link to="/blog">Blog</Link>
              </li>
              {user?.email ? (
                <>
                  <li className="font-semibold">
                    <Link to="/MyPhoto">Photo Services</Link>
                  </li>
                  <li className="font-semibold">
                    <Link to="/packageReview">
                      {" "}
                      <button>Review</button>{" "}
                    </Link>
                  </li>
                  <li className="font-semibold">
                    <Link to="/login">
                      {" "}
                      <button>Logout</button>{" "}
                    </Link>
                  </li>
                </>
              ) : (
                <li className="font-semibold">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          {/* travel photo grapy & logo is here  */}
          <div className="flex items-center w-full ">
            <img className="lg:w-20 w-16" src={header} alt="header" />
            <Link
              to="/about"
              className="  w-full normal-case font-semibold text-md sm:text-lg  lg:text-xl xl:tex-3xl font-serif text-green-600"
            >
              Travel Photographer{" "}
            </Link>
          </div>
        </div>
        {/* header menu option is here  */}
        <div className=" hidden lg:flex w-full mx-auto">
          <ul className="flex items-center text-xl xl:gap-x-6 lg:gap-x-4 gap-x-3 font-serif">
            <li className="font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="/blog">Blog</Link>
            </li>
            {user?.email ? (
              <>
                <li className="font-semibold">
                  <Link to="/MyPhoto">Photo Services</Link>
                </li>
                <li className="font-semibold">
                  <Link to="/packageReview">
                    {" "}
                    <button>Review</button>{" "}
                  </Link>
                </li>
                <li className="font-semibold">
                  <Link to="/login">
                    {" "}
                    <button onClick={handleLogout}>Logout</button>{" "}
                  </Link>
                </li>
              </>
            ) : (
              <li className="font-semibold font-serif">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
