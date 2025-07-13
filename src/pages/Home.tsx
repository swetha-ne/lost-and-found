import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
const Home = () => {
  return (
    <div className="p-8 text-center mt-10">
      <h2 className="text-[50px] font-bold text-gray-700">
        Lost Something? Found Something?
      </h2>
      <p className="mt-2 text-gray-500 text-[20px] mb-10">
        Connect with your community to reunite lost items with their owners
      </p>
      <button className="bg-black text-white px-8 py-3 rounded-lg mr-5">
        <Link to="/report-item" className="hover:pointer align-middle">
          <AddIcon /> Report Lost Item
        </Link>
      </button>
      <button className="bg-white text-black px-8 py-3 rounded-lg border border-gray-300 ">
        <Link to="/report-found" className="hover:pointer">
          Report Found Item
        </Link>
      </button>

      
    </div>
  );
};

export default Home;
