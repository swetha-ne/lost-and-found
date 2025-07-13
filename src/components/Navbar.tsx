import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Lost & Found</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link to="/signup" className="hover:underline">
          Signup
        </Link>
        <Link to="/items" className="hover:underline">
          Items
        </Link>
        <Link to="/report-item" className="hover:underline">
          Report
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
