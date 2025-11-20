import { useState } from "react";
import { Link } from "react-router-dom";
import TickerTape from "./TickerTape";
const Navbar = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">

      <div className="flex justify-between items-center px-6 py-4 shadow-md">
        
        <p className="text-2xl font-bold">Nextrade AI</p>

        <div className="hidden md:flex flex-row items-center gap-8">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
        </div>

        <div className="hidden md:block">
          {!user ? (
            <Link
              to="/login"
              className="hover:text-blue-400 transition px-4 py-1"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={onLogout}
              className="px-4 py-1 cursor-pointer bg-gray-800 rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>

        <button 
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>
    
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-black border-t border-gray-700 animate-slideDown">
          <Link 
            to="/" 
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link 
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Dashboard
          </Link>

       
          {!user ? (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                onLogout();
                setOpen(false);
              }}
              className="px-4 py-1 w-fit bg-gray-800 rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
      <TickerTape />
    </nav>
  );
};

export default Navbar;
