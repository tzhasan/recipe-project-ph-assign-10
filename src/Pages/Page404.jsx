import React from 'react';
import errorImage from "../assets/images/page404.jpg";
import { Link } from 'react-router-dom';
const Page404 = () => {
  return (
    <div className="mx-auto text-center">
      <img src={errorImage} alt="" />
      <Link to={"/"} className="btn bg-[#FF5771] border-0">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Page404;