import React, { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import SearchButton from "../components/elements/SearchButton";
import Cards from "../components/fragments/Cards";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState(null);
  const getApi = () => {
    axios
      .get("http://localhost:1337/api/galleries")
      .then((res) => {
        // console.log(res.data)
        setData([...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center mt-10">
        <h1 className="text-3xl sm:text-4xl mb-6">Inspire Through Images</h1>
        <p className="text-xs sm:text-sm text-gray mb-3 mx-5">
          Welcome to the world of inspiring and stunning visuals within our
          website gallery.
        </p>
        <SearchButton />

        <ul>
          {data !== null &&
            data.map((res) => {
              return (
                <>
                  <li className="text-2xl text-black">
                    {res.attributes.title}
                  </li>
                  <li className="text-2xl text-black">
                    {res.attributes.description}
                  </li>
                </>
              );
            })}
        </ul>
        {/* <Cards /> */}
      </div>
    </>
  );
};

export default HomePage;
