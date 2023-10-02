import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/fragments/Navbar";
import Cards from "../components/fragments/Cards";
import Footer from "../components/fragments/Footer";

// React-router
import { useNavigate } from "react-router-dom";

// JWT-Decode
import jwt_decode from "jwt-decode";

const Dashboardpage = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  
  const navigate = useNavigate();

  // Supaya tdk bisa masuk ke dashboard sebelum Login
  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token')
      setToken(response.data.accessToken)
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name)
      setExpire(decoded.exp)
    }catch(error){
      if(error.response){
        navigate("/login");
      }
    }
  }
  useEffect(() => {
    refreshToken();
  }, [])
  // End

  const Logout = async() => {
    try {
      await axios.delete(`http://localhost:5000/logout`);
      navigate('/login')
    }catch(error){
      console.log(error)
    }
  }

  const getData = () => {
    axios
      .get(`http://localhost:5000/products`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);

    navigate(`/edit/${idData}`);
    console.log(idData);
  };

  const handleDelete = (event) => {
    let idData = event.target.value;

    // console.log(idData)
    axios
      .delete(`http://localhost:5000/products/${idData}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const imageOnClick = (event) => {
    let IdData = event.target.id;

    console.log(IdData);
    navigate(`/image/${IdData}`);
  };

  return (
    <>
      <Navbar isLogin={'Logout'} onclick={Logout} />

      <div className="flex flex-col justify-between content-between h-screen">
        <div className="w-full bg-dark">
          <div className="mt-5 mx-2 flex">
            <div className="text-white h-48 p-3 shadow-2xl  w-3/4 flex flex-col justify-between">
              <h1 className="font-bold text-2xl sm:text-6xl">
                Upload Your Design{" "}
                <span className="text-light-yellow">Here</span>
              </h1>
              <p className="text-xl sm:text-2xl">
                Share your creation to the other...
              </p>
            </div>
            <div className="w-1/4 mt-4 rounded-xl p-3 bg-light-yellow flex justify-center items-center border">
              <h2 className="font-bold text-lg sm:text-3xl mx-2">
                Welcome to dashboard, <span className="text-red">{name}</span>
              </h2>
            </div>
          </div>

          <div className="mt-6 bg-white w-full rounded-t-xl text-center">
            <Link to="../create">
              <button className="bg-black text-light-yellow hover:opacity-95 text-xl p-4 shadow-xl">
                Upload an Image
              </button>
            </Link>
          </div>

          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white">
            {data !== null &&
              data
                .filter((product) => product.category === "creator") // Lakukan filter produk dengan rating
                .map((filteredProduct) => (
                  <div key={filteredProduct.id}>
                    {/* Tampilkan produk yang telah difilter */}
                    {/* <p>{filteredProduct.name}</p>
                  <p>{filteredProduct.rating}</p> */}
                    <Cards
                      image={filteredProduct.url}
                      name={filteredProduct.name}
                      price={filteredProduct.price}
                      category={filteredProduct.category}
                      rating={filteredProduct.rating}
                      nav={handleEdit}
                      value={filteredProduct.id}
                      deleteonclick={handleDelete}
                      deletevalue={filteredProduct.id}
                      imageonclick={imageOnClick}
                      imageid={filteredProduct.id}
                    />
                  </div>
                ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboardpage;
