import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { saveToken } from "../utils/auth";
import PinDropIcon from "@mui/icons-material/PinDrop";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const fakeToken = btoa(
      JSON.stringify({
        email,
        role: email === "admin@lost.com" ? "admin" : "student",
        exp: Math.floor(Date.now() / 1000) + 60 * 60, 
      })
    );

    const jwtToken = `mock.${fakeToken}.signature`; 
    saveToken(jwtToken);

    
    navigate("/dashboard");
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
         
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg w-full max-w-md"
      >
    
        <h2 className="text-2xl  font-bold text-center">Welcome back</h2>
        <h3 className="text-center mb-2">Sign in to your account to continue</h3>
        <label> Email address</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mb-8"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-900"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
