import React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Container from "./components/Container";
import Recipe from "./components/Recipe";

const App = () => {
  const [foodData, setFoodData] = useState([]);
  const [food, setFood] = useState({});
  const [check, setCheck] = useState(false);
  return (
    <div className="h-[100vh] bg-foodback bg-cover">
      <div className="h-[100vh] backdrop-blur-[4px] bg-black bg-opacity-40">
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <Foodlist foodData={foodData} setFood={setFood} setCheck={setCheck} />
          {check ? <Recipe food={food} /> : null}
        </Container>
      </div>
    </div>
  );
};

export default App;
