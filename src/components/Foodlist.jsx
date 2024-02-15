import React from "react";
import FoodItem from "./FoodItem";

const Foodlist = ({ foodData, setFood, setCheck }) => {
  return (
    <div className="w-1/2 py-6 flex flex-wrap items-center justify-center gap-8">
      {foodData.map((i) => (
        <FoodItem food={i} key={i.id} setFood={setFood} setCheck={setCheck} />
      ))}
    </div>
  );
};

export default Foodlist;
