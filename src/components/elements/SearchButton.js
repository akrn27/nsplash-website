import React from "react";

const SearchButton = () => {
  return (
    <div class="flex">
      <input
        type="text"
        class="py-2 px-4 shadow-xl rounded-l"
        placeholder="Search Images..."
      />
      <button class="shadow-xl hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded-r">
        🔍
      </button>
    </div>
  );
};

export default SearchButton;
