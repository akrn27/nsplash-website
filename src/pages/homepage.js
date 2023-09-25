import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import Cards from "../components/fragments/Cards";
import Navbar from "../components/fragments/Navbar";
import SearchButton from "../components/elements/SearchButton";
import Footer from "../components/fragments/Footer";
import TestimonialCards from "../components/fragments/TestimonialCards";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const getData = () => {
    axios.get(`http://localhost:5000/products`).then((res) => {
      // console.log(res.data)
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
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

      <div className="flex overflow-x-scroll my-8 p-4">
        <div className="flex-1 flex flex-row flex-shrink-0 p-4 space-x-4">
          <TestimonialCards image={'./testimoni/testimoni1.jpg'} heading={'Great Website'} paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, earum fugiat.'} name={'Michael'} job={'UI UX Designer'} />
          <TestimonialCards image={'./testimoni/testimoni2.jpg'} heading={'Love This Website'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt facere maxime minima excepturi doloremque dolore.'} name={'David'} job={'Frontend Developer'} />
          <TestimonialCards image={'./testimoni/testimoni3.jpg'} heading={'Amazing Website'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt facere maxime minima excepturi.'} name={'Sarah'} job={'UI UX Designer'} />
          <TestimonialCards image={'./testimoni/testimoni4.jpg'} heading={'Recommended'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt facere maxime minim.'} name={'Juan'} job={'Backend Developer'} />

        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
