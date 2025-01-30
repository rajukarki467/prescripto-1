import { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="relative" aria-label="Home">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors" className="relative" aria-label="All Doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about" className="relative" aria-label="About">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact" className="relative" aria-label="Contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* Desktop or Mobile Profile / Account button */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div
            className="relative flex items-center cursor-pointer"
            onClick={toggleMenu}
            aria-label="Profile Dropdown"
          >
            <img
              className="w-8 rounded-full cursor-pointer"
              src={userData.image}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    MY Profile
                  </p>
                  <p
                    onClick={() => navigate("my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={logout}
                    className="hover:text-red-600 cursor-pointer" // Red for logout
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        <img
          className="w-6 md:hidden"
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt="Menu"
        />
        {/* --- Mobile Menu --- */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="Logo" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close Menu"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 text-lg font-medium py-2">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/"
              aria-label="Home"
            >
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/doctors"
              aria-label="All Doctors"
            >
              <p className="px-4 py-2 rounded inline-block">All Doctors</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/about"
              aria-label="About"
            >
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/contact"
              aria-label="Contact Us"
            >
              <p className="px-4 py-2 rounded inline-block">Contact Us</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
