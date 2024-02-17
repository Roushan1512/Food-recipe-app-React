import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Recipe = ({ food }) => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${food.id}/information`;
  const api_Key = "2a2d51b25c3a4a4c81b7fa122a6d8cd5";
  useEffect(() => {
    if (food.id != undefined) {
      async function recipecall() {
        axios
          .get(`${URL}?apiKey=${api_Key}`)
          .then((res) => {
            console.log(res.data);
            setRecipe(res.data);
            setIsLoading(false);
          })
          .catch((e) => {
            console.log("Axios Error : ", e);
          });
      }
      recipecall();
    }
  }, [food]);

  return (
    <div className="h-[65vh] w-1/2 absolute left-1/2 flex flex-col justify-start items-center overflow-y-scroll scrollbar-hide">
      <div className="w-[95%] mx-auto">
        <h1 className="text-center text-4xl py-[0.5rem] font-bold bg-amber-500 bg-opacity-80 w-[100%] mx-auto rounded-full text-pretty">
          {recipe.title}
        </h1>
        <img
          className="w-[80%] object-contain mt-6 object-center mx-auto rounded-3xl shadow-md shadow-black"
          src={recipe.image}
          alt=""
        />
        <div className="text-sm px-10 py-2 flex items-center bg-amber-400 bg-opacity-80 rounded-full my-4">
          <span className="flex-1 w-1/4 font-semibold">
            ⏳ {recipe.readyInMinutes} mins
          </span>
          <span className="flex-1 w-1/4 font-semibold">
            🍜 Serves : {recipe.servings}
          </span>
          <span className="flex-1 w-1/4 font-semibold">
            {recipe.vegetarian ? "🥦  Veg" : "🍗  Non Veg"}
          </span>
          <span className="flex-1 w-1/4 font-semibold">
            💲 {(recipe.pricePerServing / 100).toFixed(3)} per serving
          </span>
        </div>
      </div>
      <br />
      <div className="mx-auto w-[95%] bg-white bg-opacity-95 py-6 px-8 rounded-3xl shadow-inner shadow-black">
        <h2 className="text-center text-2xl font-bold underline mb-8">
          Ingredients Required
        </h2>
        <ul>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            recipe.extendedIngredients.map((i) => (
              <li className="text-md list-disc list-outside text-gray-900 font-medium pl-2">
                {i.original}
              </li>
            ))
          )}
        </ul>
        <br />
        <br />
        <br />
        <h2 className="text-center text-2xl font-bold underline mb-8">
          Steps to Cook
        </h2>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            recipe.analyzedInstructions[0].steps.map((i) => (
              <li className="text-md list-decimal list-outside text-gray-900 font-medium pl-2">
                {i.step}
                <br />
              </li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
