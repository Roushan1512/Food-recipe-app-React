import React from "react";

const FoodItem = ({ food, setFood, setCheck }) => {
  return (
    <div className="h-[36vh] py-8 w-[40vw] px-4 flex flex-row justify-center items-center  relative rounded-3xl shadow-md shadow-black bg-white bg-opacity-80">
      <img
        src={food.image}
        alt=""
        className="w-[18vw] rounded-lg border-2 shadow-sm shadow-black"
      />
      <div className="h-full w-[60%] flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-balance my-auto">
          {food.title}
        </h1>
        <button
          onClick={() => {
            setFood(food);
            setCheck(true);
          }}
          className="text-white font-semibold h-10 w-32 bg-green-600 rounded-3xl transition-colors hover:bg-green-400 hover:text-black hover:border-black hover:border-2"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
