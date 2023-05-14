import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { MdFavorite } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ r }) => {
  const [fvrt, setFvrt] = useState(false);
  const handleFvrt = () => {
    if (!fvrt) {
      setFvrt(true);
      toast("Add to Favorite");
    }
    else {
      toast("Already added")
    }
  }
  const { method, name, ingredients, rating } = r;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <p>
          <span className="text-xl font-bold">Cooking method:</span> {method}
        </p>
        <p className="text-xl font-bold">Ingredients</p>
        <ol className="grid grid-cols-2">
          {ingredients.map((ingredient, i) => (
            <li key={ingredient}>
              {i + 1}.{ingredient}
            </li>
          ))}
        </ol>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Rating:</p>
              {rating && (
                <Rating
                  initialRating={rating}
                  readonly={true}
                  fullSymbol={<AiFillStar className="text-yellow-500" />}
                  emptySymbol={<AiOutlineStar className="text-yellow-500" />}
                />
              )}
            </div>
            <div onClick={handleFvrt} >
              <button disabled={fvrt} className="btn bg-gray-500 border-0">
                Favorite{"  "}
                <MdFavorite
                  className={`text-3xl text-[#FF5771] opacity-50 ${
                    fvrt && "opacity-95"
                  }`}
                ></MdFavorite>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeCard;
