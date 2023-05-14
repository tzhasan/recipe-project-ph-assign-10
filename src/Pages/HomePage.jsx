import React, { useContext } from 'react';
import redchilli from '../assets/images/redchilli.png'
import chef from "../assets/images/wepik-export-20230501231151.png";
import ChefSectionHome from './ChefSectionHome';
// import Loading from '../SharedComponents/Loading';
// import { AuthContext } from '../Auth-Provider/AuthProvider';
import RecipesTipsSection from './RecipesTipsSection';
import ShareYourRecipeSection from './ShareYourRecipeSection';
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-4 gap-8 md:mt-10 mt-2 p-6 md:p-10">
        <div className="md:w-[45%]">
          <LazyLoadImage
            effect="blur"
            className="rounded-lg"
            src={chef}
            alt=""
          />
        </div>
        <div className="md:w-[50%] my-auto">
          <h2 className="text-xl md:text-4xl font-bold md:mb-4 mb-2">
            Discover the Rich and <br />{" "}
            <span className="text-[#FF5771]">Flavorful World</span> <br /> of
            Bangladeshi Cuisine
          </h2>
          
          <p className="md:text-lg text:sm">
            Are you ready to spice up your taste buds? Look no further than our
            Bangladeshi recipe website! From mouth-watering curries to savory
            biryanis, our recipes will transport you to the streets of Dhaka
            with every bite. Our dishes feature fresh ingredients and bold
            flavors that will leave you craving more. Whether you're a seasoned
            home cook or just starting out, our easy-to-follow recipes will help
            you recreate authentic Bangladeshi dishes in your own kitchen. Join
            our community of food lovers today and let's explore the delicious
            world of Bangladeshi cuisine together!
          </p>
        </div>
      </div>
      <ChefSectionHome></ChefSectionHome>
      <RecipesTipsSection></RecipesTipsSection>
      <ShareYourRecipeSection></ShareYourRecipeSection>
    </div>
  );
};

export default HomePage;