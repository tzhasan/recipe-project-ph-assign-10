import React from 'react';
import image from "../assets/images/recipetips.jpg"
import "../Styles/RecipesTipsSection.css"
const RecipesTipsSection = () => {
  return (
    <div className="bg-image shadow-xl text-white  ">
      <div className="max-w-[70%] max-h-[50%] pt-[10%] mx-auto">
        <h2 className="card-title md:text-6xl text-xl font-bold mb-4">
          Recipe tips for <span className="text-[#FF5771]">Everyday!</span>
        </h2>
        <p
          style={{ textShadow: "2px 0px 6px #FFFFFF" }}
          className="md:text-lg text-sm drop-shadow-lg"
        >
          When writing a recipe, be sure to include detailed instructions,
          including cooking times and temperatures, ingredient measurements, and
          any special techniques or tips that will help the reader achieve the
          best results. Also, consider including photos or videos to make the
          recipe more visually appealing and easy to follow. Finally, be
          creative and experiment with different ingredients and flavors to
          create unique and delicious recipes that your audience will love!
        </p>
      </div>
    </div>
  );
};

export default RecipesTipsSection;