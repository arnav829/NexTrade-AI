import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-6 py-4 shadow-md">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">Nextrade AI</p>
      </div>

      {/* Links */}
      <div className="flex flex-row items-center gap-8">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
      </div>

      {/* Auth Button */}
      <div>
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
    </nav>
  );
};

export default Navbar;
