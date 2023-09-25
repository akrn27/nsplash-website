import React from "react";

const TestimonialCards = ({image, heading, paragraph, name, job}) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg flex justify-center flex-col items-center"
      style={{ width: "400px" }}
    >
      <img
        src={image}
        width="160px"
        className="rounded-full"
      />
      <h1 className="text-3xl font-semibold my-4 text-center">
        {heading}
      </h1>
      <p className="text-xl mb-4 text-center">
        {paragraph}
      </p>
      <p className="font-semibold text-xl mb-2">{name}</p>
      <p>{job}</p>
    </div>
  );
};

export default TestimonialCards;
