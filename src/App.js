import Axios from "axios";
import React from "react";
import { useState } from "react";
import "./app.css";
import RecipeTile from "./components/recipe-tile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = `aa948ef7`;
  const YOUR_APP_KEY = "7fcb1f5feeacc176d6abb804198d5e5d";



  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    //console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />


        <select className="app_healthLabels">
      //  <option onClick = {() =>sethealthLabels("key")}>key</option>
        <option onClick = {() =>sethealthLabels("vegan")}>Vegan</option>
        <option onClick={()=>sethealthLabels("vegetarian")}> vegetarian</option>
        <option onClick={()=>sethealthLabels("paleo")}>paleo</option>
        <option onClick={()=>sethealthLabels("dairy-free")}>dairy-free</option>
        <option onClick={()=>sethealthLabels("gluten-free")}>gluten-free</option>
        <option onClick={()=>sethealthLabels("wheat-free")}>wheat-free</option>
        <option onClick={()=>sethealthLabels("low-sugar")}>low-sugar</option>
        <option onClick={()=>sethealthLabels("tree-nut-free")}>tree-nut-free</option>
        <option onClick={()=>sethealthLabels("soy-free")}>soy-free</option>
        <option onClick={()=>sethealthLabels("fish-free")}>fish-free</option>
        <option onClick={()=>sethealthLabels("shellfish-free")}>shellfish-free</option>

      </select>
      </form>

      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
