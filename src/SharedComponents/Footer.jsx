import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsMailbox } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content flex justify-between">
      <div>
        <p className="text-xs md:text-lg">
          Copyright © 2023 - Assignment by Tajbiul Islam
        </p>
      </div>
      <div className="flex gap-2 text-xs md:text-lg">
        <BsFacebook></BsFacebook>
        <BsLinkedin></BsLinkedin>
        <BsInstagram></BsInstagram>
        <BsMailbox></BsMailbox>
      </div>
    </footer>
  );
};

export default Footer;