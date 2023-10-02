import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import Cards from "../components/fragments/Cards";
import Navbar from "../components/fragments/Navbar";
import SearchButton from "../components/elements/SearchButton";
import Footer from "../components/fragments/Footer";
import TestimonialCards from "../components/fragments/TestimonialCards";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import './homepage.css';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");

  const getData = () => {
    axios.get(`http://localhost:5000/products`).then((res) => {
      // console.log(res.data)
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const refreshToken = async() => {
    try {
      const res = await axios.get('http://localhost:5000/token');
      // console.log(res.data.accessToken)
      const decoded = jwtDecode(res.data.accessToken);
      setToken(decoded)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    refreshToken()
  }, [])

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      {token ? <Navbar isLogin={`Hi, ${token.name}`} link={'/dashboard'} /> : <Navbar isLogin='Login' link={'/login'} />}
      <div className="w-full flex flex-col items-center mt-10 shadow-xl">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-3xl sm:text-4xl mb-6">Inspire Through Images</h1>
          <p className="text-xs sm:text-sm text-gray mb-3 mx-5">
            Welcome to the world of inspiring and stunning visuals within our
            website gallery.
          </p>
          <SearchButton
            value={search}
            onchange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
        {data !== null &&
          (search === ""
            ? data.map((filteredProduct) => (
                <Cards
                  key={filteredProduct.id}
                  image={filteredProduct.url}
                  name={filteredProduct.name}
                  desc={filteredProduct.description}
                  price={filteredProduct.price}
                  category={filteredProduct.category}
                  rating={filteredProduct.rating}
                ></Cards>
              ))
            : search &&
              data
                .filter(
                  (product) =>
                    product.name &&
                    product.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((filteredProduct) => (
                  <Cards
                    key={filteredProduct.id}
                    image={filteredProduct.url}
                    name={filteredProduct.name}
                    desc={filteredProduct.description}
                    price={filteredProduct.price}
                    category={filteredProduct.category}
                    rating={filteredProduct.rating}
                  />
                )))}
      </div>

      <div
        className="relative my-10 w-full h-96 object-cover bg-center shadow-2xl"
        style={{ backgroundImage: `url('./img/mountain.jpg')` }}
      >
        {/* <div className="absolute bottom-0 flex font-poppins"> */}
        <div className="absolute md:bottom-0 right-0 md:left-0 bg-white rounded-xl p-4 m-4 w-64 md:w-96">
          <h2 className="text-lg md:text-3xl font-semibold">Advantages</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            necessitatibus.
          </p>
        </div>
        <div className="absolute bottom-0 md:right-0 bg-white rounded-xl p-4 m-4 w-64 md:w-96">
          <h2 className="text-lg md:text-3xl font-semibold">Best Deals</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            amet nulla fugit!
          </p>
        </div>
      </div>
      {/* </div> */}

   
        <div className="flex relative items-center p-4 my-8">
          <MdChevronLeft onClick={slideLeft} size={40} className="cursor-pointer" />
          <div id="slider" className="w-full h-full gap-6 overflow-x-scroll whitespace-nowrap scroll-smooth flex ">
            <TestimonialCards image={'./testimoni/testimoni1.jpg'} heading={'Great Website'} paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, earum fugiat.'} name={'Michael'} job={'UI UX Designer'} />
            <TestimonialCards image={'./testimoni/testimoni2.jpg'} heading={'Love This Website'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt facere maxime minima excepturi doloremque dolore.'} name={'David'} job={'Frontend Developer'} />
            <TestimonialCards image={'./testimoni/testimoni3.jpg'} heading={'Amazing Website'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt facere maxime minima excepturi.'} name={'Sarah'} job={'UI UX Designer'} />
            <TestimonialCards image={'./testimoni/testimoni4.jpg'} heading={'Recommended'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt facere maxime minim.'} name={'Juan'} job={'Backend Developer'} />
            <TestimonialCards image={'./testimoni/testimoni5.jpg'} heading={'Good Website'} paragraph={'Lorem ipsum dolor sit amet consect onuis nanasasasas elit. Illo sunt facere maxime minim.'} name={'Ahmad'} job={'Project Manager'} />
          </div>
          <MdChevronRight onClick={slideRight} size={40} className="cursor-pointer" />
        </div>

      <Footer />
    </>
  );
};

export default HomePage;
