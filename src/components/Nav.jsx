import React from "react";
import { GiChickenOven } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="h-[12vh] w-full flex gap-0 relative border-b-8 border-double border-black mb-8 shadow-xl bg-gradient-to-l from-amber-600 to-amber-200">
      {/* <img
        src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
        alt=""
        className="h-[80%] object-contain absolute left-2 rounded-xl shadow-inner my-2"
      /> */}
      <GiChickenOven className="h-[100%] w-16 absolute left-4 my-0" />
      <h1 className="absolute left-[50%] [transform:translateX(-50%)] text-6xl font-semibold font-serif">
        Food App
      </h1>
    </div>
  );
};

export default Nav;
