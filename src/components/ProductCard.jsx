import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

function ProductCard({ allFood, loading }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCardClick = (index) => {
    setSelectedRecipe(allFood[index].recipe);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center ">
          <img
            className="w-16 py-20"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      ) : (
        <>
          {selectedRecipe ? (
            <RecipeCard recipe={selectedRecipe} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              {allFood.map((item, index) => {
                const { image, label, calories, dishType, cuisineType } =
                  item.recipe;
                return (
                  <div key={index}>
                    <div
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-300"
                      onClick={() => handleCardClick(index)}
                    >
                      <img
                        className="rounded-md w-full h-40 object-cover mb-4"
                        src={image}
                        alt=""
                      />
                      <h2 className="text-xl text-gray-800 font-bold mb-2">
                        {label}
                      </h2>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-bold">Calories:</span> {calories}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-bold">DishType:</span> {dishType}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        <span className="font-bold">CuisineType:</span>{" "}
                        {cuisineType}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ProductCard;
