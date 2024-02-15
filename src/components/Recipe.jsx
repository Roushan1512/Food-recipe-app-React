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
    <div className="w-1/2 absolute top-10 left-1/2">
      <div>
        <h1 className="text-center text-5xl font-semibold">{recipe.title}</h1>
        <img
          className="w-[60%] object-contain mt-10 object-center mx-auto rounded-3xl shadow-md shadow-black"
          src={recipe.image}
          alt=""
        />
        <div className="text-lg pl-10 py-10">
          <strong>⏳ {recipe.readyInMinutes} mins</strong>
          <br />
          <strong>🍜 Serves : {recipe.servings}</strong>
          <br />
          {recipe.vegetarian ? "🥦  Veg" : "🍗  Non Veg"}
          <br />
          💲 {recipe.pricePerServing / 100} per serving
        </div>
      </div>
      <br />
      <div className="mx-8">
        <h2 className="text-center text-xl font-bold underline">
          Instructions
        </h2>
        <br />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          recipe.analyzedInstructions[0].steps.map((i) => <li>{i.step}</li>)
        )}
      </div>
    </div>
  );
};

export default Recipe;
