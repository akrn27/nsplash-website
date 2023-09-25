import React from "react";

const SearchButton = ({value, onchange}) => {
  return (
    <div className="flex">
      <input
        type="text"
        className="py-2 px-4 shadow-xl rounded-l"
        placeholder="Search Images..."
        value={value}
        onChange={onchange}
      />
      <button className="shadow-xl hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded-r">
        🔍
      </button>
    </div>
  );
};

export default SearchButton;
