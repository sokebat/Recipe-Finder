import React from "react";

const RecipeCard = (props) => {
  const { label, image, ingredientLines, dishType, ingredients } = props.recipe;

  return (
    <>
      <div className="w-[900px] mx-auto relative bg-slate-200 rounded-3xl overflow-hidden shadow-3xl">
        <div className="flex  flex-col items-center ">
          <img
            className="w-800 h-100 object-cover rounded-xl mt-5"
            src={image}
            alt={label}
          />

          <div className="p-6">
            <div className="font-bold text-2xl mb-2">{label}</div>
            {/* <p className="text-gray-700">{dishType}</p> */}
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4 font-bold text-2xl">Ingredients:</div>
          <ul className="list-disc ml-6">
            {ingredientLines.map((ingredient, index) => (
              <h2 key={index + 1} className="font-semibold text-lg">
                {index + 1}) {"   "} {ingredient}
              </h2>
            ))}
          </ul>
        </div>

        <div className="p-6">
          <h2 className="mb-4 font-bold text-2xl ">Ingredients Details:</h2>
          <div className="grid grid-cols-2 gap-4">
          {ingredients.map((ingredient, index) => (
            <div key={index + 1} className="mb-4">
              <p className="text-lg font-semibold">
                {index + 1}. {ingredient.text}
              </p>
              <img
                className="w-500 h-50 object-cover rounded-xl mt-5"
                src={ingredient.image}
                alt={ingredient.text}
              />
            </div>
          ))}
          </div>
         
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
