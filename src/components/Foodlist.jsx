import React from "react";
import FoodItem from "./FoodItem";

const Foodlist = ({ foodData, setFood, setCheck }) => {
  return (
    <div className="h-[65vh] w-1/2 py-6 flex flex-col items-center justify-center gap-8 overflow-y-scroll scrollbar-hide">
      <div className=" h-[65vh] w-[90%] flex flex-col items-center justify-start pt-4 gap-8">
        {foodData.map((i) => (
          <FoodItem food={i} key={i.id} setFood={setFood} setCheck={setCheck} />
        ))}
      </div>
    </div>
  );
};

export default Foodlist;
