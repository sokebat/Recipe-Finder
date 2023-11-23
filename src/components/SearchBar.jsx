import React, { useCallback, useEffect } from "react";

function SearchBar({ search, setSearch, fetchFood }) {

  const handleEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        fetchFood();
      }
    },
    [fetchFood]
  );

 
  useEffect(() => {
    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [handleEnter]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="input flex justify-center mt-10 mb-7 px-5 lg:px-0">
        <input
          type="text"
          value={search}
          placeholder="Search your recipe"
          onChange={handleChange}
          className=" shadow-md bg-gray-200 placeholder-gray-500 rounded-l-lg px-2 py-2 w-80 outline-none border-2 border-gray-600 "
        />
        <button
          onClick={fetchFood}
          className="bg-[#F8EFBA] px-4 rounded-r-lg text-black shadow-md border-b-2 border-r-2 border-t-2 border-gray-600 "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
