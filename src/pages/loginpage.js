import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/login`, {
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center font-poppins">
        <div className="shadow-2xl p-6 w-96">
          <h1 className="font-semibold text-3xl mb-4">USER LOGIN</h1>
          <form onSubmit={Auth}>
            <div>
              <input
                className="bg-light-gray rounded-xl px-2 py-1 shadow-md mb-3 w-full"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="bg-light-gray rounded-xl px-2 py-1 shadow-md mb-5 w-full"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Link to="/register">
                <p className="text-gray text-xs mb-6 text-right cursor-pointer">
                  Create new account
                </p>
              </Link>
            </div>
            <button className="bg-black text-white w-full rounded-xl px-2 py-1 shadow-md">
              Login
            </button>
            <div className="mt-4 text-red text-sm text-center">{msg}</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
