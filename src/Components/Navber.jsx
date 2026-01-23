// Navber.jsx
import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faX, faBars } from "@fortawesome/free-solid-svg-icons";

const Navber = () => {
  const { user, signoutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-bold" : "text-gray-700"
          }
        >
          All Movies
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              to="/movies/add"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "text-gray-700"
              }
            >
              Add Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies/my-collection"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "text-gray-700"
              }
            >
              My Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies/my-watchlist"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "text-gray-700"
              }
            >
              My Watchlist
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/movies/login"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "text-gray-700"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "text-gray-700"
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFilm} className="text-yellow-500 text-2xl" />
            <NavLink to="/" className="text-xl font-bold text-yellow-500">
              MovieMaster Pro
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-2">
             {user ? (
              <>
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-2 border-yellow-500"
                  title={user.displayName || user.email}
                />
                <button onClick={signoutUser} className="btn btn-sm">
                  Sign Out
                </button>
              </>
            ) : (
              <NavLink to="/movies/login" className="btn btn-sm">
                Sign In
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="btn btn-ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faX : faBars} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-base-100 shadow-md">
          <ul className="menu flex flex-col p-4 gap-2">{links}</ul>
          <div className="p-4 border-t border-gray-200">
            {user ? (
              <button
                onClick={() => {
                  signoutUser();
                  setMobileMenuOpen(false);
                }}
                className="btn w-full"
              >
                Sign Out
              </button>
            ) : (
              <NavLink
                to="/movies/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn w-full"
              >
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
