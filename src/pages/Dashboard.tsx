import { decodeToken, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = decodeToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-700">Welcome, {user?.email}</h2>
      <p className="mt-2 text-gray-500">Role: {user?.role}</p>

      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
