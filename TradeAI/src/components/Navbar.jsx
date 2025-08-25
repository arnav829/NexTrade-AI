import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-black text-white flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="https://4kwallpapers.com/images/walls/thumbs_2t/13812.png" alt="" className="h-12"/>
        <p className="text-2xl font-bold">Nextrade AI</p>
      </div>
        <div className="">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          {!user ? (
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          ) : (
            <button
              onClick={onLogout}
              className="px-4 py-1 bg-red-500 rounded hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
