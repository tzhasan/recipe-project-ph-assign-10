import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChefContext } from '../Auth-Provider/ContextProvider';
import { AiOutlineLike } from 'react-icons/ai';
import Loading from '../SharedComponents/Loading';
import RecipeCard from './RecipeCard';

const ViewRecipes = () => {
  const { id } = useParams()
  const chefdata = useContext(ChefContext)
   if (!chefdata) {
     return <Loading />;
   }
   const chef = chefdata.find((cd) => cd.id == id);
   if (!chef) {
     return <Loading/>;
   }
  const {
    image,
    name,
    experience,
    number_of_recipes,
    likes,
    short_bio,
    recipes,
  } = chef;

  
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img src={image} className=" rounded-lg shadow-2xl md:max-w-lg" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{short_bio}</p>
            <div className="flex justify-between items-end w-[90%]">
              <div className="text-2xl">
                <p>Experience: {experience} years</p>
                <p>Total Recipes: {number_of_recipes} </p>
              </div>
              <div className="flex font-bold text-2xl items-center gap-2 text-[#FF5771]">
                {likes}
                <AiOutlineLike className=" " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-4">
        List of <span className="text-[#FF5771]">Recipes</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 mx-auto gap-4">
        {recipes.map((r) => (
          <RecipeCard key={r.name} r={r}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipes;