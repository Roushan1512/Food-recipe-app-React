import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { IoMdSearch } from "react-icons/io";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const api_Key = "2a2d51b25c3a4a4c81b7fa122a6d8cd5";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("");
  //   async function submitted(e) {
  //     e.preventDefault();
  //     const res = await fetch(`${URL}?query=${query}&apiKey=${api_Key}`);
  //     const data = await res.json();
  //     console.log(data.results);
  //     console.log("api called");
  //   }
  async function submitted(e) {
    e.preventDefault();
    if (query.trim().length != 0) {
      axios
        .get(`${URL}?query=${query}&apiKey=${api_Key}`)
        .then((res) => {
          const data = res.data.results;
          console.log(data);
          setFoodData(data);
          setQuery("");
        })
        .catch((e) => {
          console.log("Axios Error : ", e.message);
        });
    } else {
      console.log("Input field blank");
      setQuery("Input field blank");
      setTimeout(() => {
        setQuery("");
      }, 1000);
    }
  }
  return (
    <div className="flex w-full justify-center items-center">
      <form
        onSubmit={submitted}
        className="flex justify-center items-center w-[60%] bg-neutral-200 h-16 rounded-full shadow-md shadow-black"
      >
        <div className="border-b-[2.5px] border-black h-[50%] px-2 flex justify-center items-center">
          <IoMdSearch size={25} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find out what you're looking for"
          className="border-b-[2.5px] border-black h-[50%] w-[50%] focus:outline-none bg-transparent
           text-center placeholder:text-slate-800 focus:placeholder-transparent"
        />
        <br />
        <button
          type="submit"
          className="ml-[2.5rem] border-2 border-black h-[60%] w-[15%] rounded-3xl font-medium hover:text-white hover:bg-black"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
