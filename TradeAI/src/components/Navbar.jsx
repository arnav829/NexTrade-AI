import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-black text-white flex justify-between items-center p-1">
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold px-5">Nextrade AI</p>
      </div>
        <div className="flex flex-row items-center gap-9">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
        </div>
        <div className="">
          {!user ? (
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          ) : (
            <button
              onClick={onLogout}
              className="px-4 py-1 m-1 cursor-pointer bg-gray-700 rounded-xl hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
