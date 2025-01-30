import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---left section  */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum
            est, fuga sint architecto rem eos atque sit molestiae repellendus
            facilis aliquid harum rerum, fugit debitis culpa praesentium dolore
            ex! Fugit animi perspiciatis distinctio vero provident dolores porro
            architecto praesentium inventore exercitationem, obcaecati laborum
            qui debitis sapiente blanditiis adipisci cumque!
          </p>
        </div>
        {/* ---middle section  */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ---right section  */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+977 9861365371</li>
            <li>rajukarki467@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        {/* ---------copyright--------- */}
        <hr />
        <p className="text-sm py-5 text-center">
          Copyright 2024 @Prescripto - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
