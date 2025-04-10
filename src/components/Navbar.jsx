import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Heart } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="fixed left-[5px] right-[5px] top-[5px] bg-red-800 px-3 py-4 rounded-2xl shadow-lg z-50">
      <div className="flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-semibold tracking-wide">
          GookWay
        </Link>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex gap-6 text-white text-lg font-medium">
          <li>
            <Link to="/" className="hover:opacity-80">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:opacity-80">Products</Link>
          </li>
          <li>
            <Link to="/about" className="hover:opacity-80">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:opacity-80">Contact</Link>
          </li>
        </ul>

        {/* Icons - Cart and Profile */}
        <div className="hidden md:flex gap-4 text-white text-lg">
          <Link to="/favorites">
            <Heart size={24} className="hover:opacity-80" />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={24} className="hover:opacity-80" />
          </Link>
          <Link to="/profile">
            <User size={24} className="hover:opacity-80" />
          </Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Expanding smoothly */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-white text-lg font-medium px-4 py-3">
          <li>
            <Link to="/" className="hover:opacity-80" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:opacity-80" onClick={() => setOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:opacity-80" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:opacity-80" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <Heart size={24} className="hover:opacity-80" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCart size={24} className="hover:opacity-80" />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <User size={24} className="hover:opacity-80" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
