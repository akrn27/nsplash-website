import React, { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AboutPage = () => {
  const [token, setToken] = useState('');

  const refreshToken = async() => {
    try {
      const res = await axios.get('http://localhost:5000/token');
      const decoded = jwtDecode(res.data.accessToken);
      setToken(decoded)
      // console.log(res)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    refreshToken()
  }, [])

  return (
    <>
      {token ? <Navbar isLogin={`Hi, ${token.name}`} link={'/dashboard'} /> : <Navbar isLogin={'Login'} link={'/login'} />}

      <div className="flex flex-col md:flex-row font-poppins mt-8">
        <div className="shadow-2xl p-4 w-full md:w-4/6 h-72 rounded-xl mx-3 mb-8 md:mb-0 content-between flex flex-col justify-between">
          <h1 className="text-5xl font-semibold">Muhammad Andika Kurnia Alamsyah</h1>
          <h2>NSPLASH PROJECT | 2023</h2>
        </div>
        
        <div className="flex w-full md:w-2/6 gap-1">
          <div className="shadow-2xl rounded-xl w-full p-2">
            <h1 className="font-semibold text-blue">FRONTEND</h1>
            <ul>
              <li className="p-1 bg-light-gray hover:opacity-95 rounded-xl border-gray shadow-md mb-1">HTML | CSS | JS</li>
              <li className="p-1 bg-light-gray hover:opacity-95 rounded-xl border-gray shadow-md mb-1">TAILWIND</li>
              <li className="p-1 bg-light-gray hover:opacity-95 rounded-xl border-gray shadow-md mb-1">REACTJS</li>
              <li className="p-1 bg-light-gray hover:opacity-95 rounded-xl border-gray shadow-md mb-1">AXIOS | REACT-ROUTER</li>
              <li className="p-1 bg-light-gray hover:opacity-95 rounded-xl border-gray shadow-md mb-1">GIT | GITHUB</li>
            </ul>
          </div>
          <div className="shadow-2xl rounded-xl w-full p-2">
            <h1 className="font-semibold text-orange">BACKEND</h1>
            <ul>
              <li className="p-1 bg-light-gray hover:opacity-95 rounded-xl border-gray shadow-md mb-1">NODEJS</li>
              <li className="p-1 bg-light-gray hover:opacity-95 rounded-xl border-gray shadow-md mb-1">EXPRESSJS</li>
              <li className="p-1 bg-light-gray hover:opacity-95 rounded-xl border-gray shadow-md mb-1">MYSQL</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-52 md:mt-56 max-w-full">
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
