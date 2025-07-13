import { Link } from "react-router-dom";
import PinDropIcon from "@mui/icons-material/PinDrop";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 text-black p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="hover:pointer">
          <h1 className="text-[25px] font-bold">
            {" "}
            <PinDropIcon fontSize="large" /> FindIt
          </h1>
        </Link>
      </div>

      <div className="space-x-4">
       
        
        <Link to="/items" className="hover:pointer">
          Browse Items
        </Link>
        <button className="bg-black text-white p-2 rounded-lg">
          <Link to="/report-item" className="hover:pointer align-middle">
            <AddIcon /> Report Item
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
