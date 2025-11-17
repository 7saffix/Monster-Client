import { useState } from "react";
import { FiMenu, FiX, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full shadow-sm">
      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-medium cursor-pointer">Monster</div>

        {/* Center Menu (Desktop Only) */}
        <ul className="hidden md:flex items-center gap-4 text-gray-700 font-normal">
          <Link to="#" className="hover:text-black cursor-pointer">
            Home
          </Link>
          <Link to="#" className="hover:text-black cursor-pointer">
            Men
          </Link>
          <Link to="#" className="hover:text-black cursor-pointer">
            Women
          </Link>
          <Link to="#" className="hover:text-black cursor-pointer">
            Top Wear
          </Link>
          <Link to="#" className="hover:text-black cursor-pointer">
            Bottom Wear
          </Link>
        </ul>

        {/* Right: Icons */}
        <div className="flex items-center gap-5 text-xl text-gray-700">
          <FiSearch className="cursor-pointer hover:text-black" />
          <FiShoppingCart className="cursor-pointer hover:text-black" />
          <FiUser className="cursor-pointer hover:text-black" />

          {/* Mobile Hamburger */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={handleToggle}
          >
            <FiMenu />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-4 px-4 py-4 text-gray-700 font-normal">
          <Link to="#" className="hover:text-black cursor-pointer">
            Home
          </Link>
          <Link to="#" className="hover:text-black cursor-pointer">
            Men
          </Link>
          <Link to="#" className="hover:text-black cursor-pointer">
            Women
          </Link>
          <Link to="#" className="hover:text-black cursor-pointer">
            Top Wear
          </Link>
          <Link to="#" className="hover:text-black cursor-pointer">
            Bottom Wear
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
