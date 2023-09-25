import React from "react";
import { Link } from "react-router-dom";

const Cards = ({
  image,
  name,
  desc,
  price,
  category,
  rating,
  nav,
  value,
  deleteonclick,
  deletevalue,
  imageonclick,
  imageid,
}) => {
  const calcRating = (rating) => {
    if (rating === 1) {
      return `Rating: ⭐`;
    } else if (rating === 2) {
      return `Rating: ⭐⭐`;
    } else if (rating === 3) {
      return `Rating: ⭐⭐⭐`;
    } else if (rating === 4) {
      return `Rating: ⭐⭐⭐⭐`;
    } else {
      return `Rating: ⭐⭐⭐⭐⭐`;
    }
  };

  return (
    <div className="flex flex-col content-end rounded overflow-hidden shadow-lg">
      <img
        className="w-full p-3"
        src={image}
        id={imageid}
        alt="Card"
        onClick={imageonclick}
      />
      <div className="px-6 py-4 font-poppins h-full flex flex-col justify-between">
        <div>
          <div className="border border-light-gray rounded-2xl py-1 px-2 bg-light-gray inline-block mb-2">
            {category}
          </div>
          <div className="text-2xl mb-3">{name}</div>
          <div className="font-bold text-4xl mb-3">${price}</div>
          <div className="mb-3">{calcRating(rating)}</div>
        </div>
        <div>
          {category !== "creator" ? (
            <button className="border bg-black text-white p-3 text-center rounded-xl w-full">
              Buy Now
            </button>
          ) : (
            <div className="w-full">
              <button
                className="border bg-black text-blue p-3 text-center rounded-xl w-1/2 hover:opacity-95"
                onClick={nav}
                value={value}
              >
                Edit
              </button>
              <button
                className="border bg-black text-red p-3 text-center rounded-xl w-1/2 hover:opacity-95"
                onClick={deleteonclick}
                value={deletevalue}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
