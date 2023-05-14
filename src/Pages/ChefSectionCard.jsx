import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { AuthContext } from '../Auth-Provider/AuthProvider';
import Loading from '../SharedComponents/Loading';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const ChefSectionCard = ({ cd }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>
  }
  const { id, image, name, experience, number_of_recipes, likes ,} = cd;
  return (
    <div className="card card-compact w-full md:h-[400px] bg-base-100 shadow-md">
      <figure>
        <LazyLoadImage
        effect='blur'  className="w-full h-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl md:text-3xl">{name}</h2>
        <div className="flex justify-between">
          <div>
            <p>Experience: {experience} years</p>
            <p>Total Recipes: {number_of_recipes} </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineLike className="text-[#FF5771] text-2xl" />
            {likes}{" "}
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/viewRecipes/${id}`}>
            <button className="btn btn-primary bg-[#FF5771] border-0 hover:bg-[#bc3f52]">
              View recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefSectionCard;