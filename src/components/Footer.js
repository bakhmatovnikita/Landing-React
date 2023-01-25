import React from "react";

const Footer = ({ logo, qr }) => {
  return (
    <div
      id="contact"
      className="flex flex-row flex-wrap items-center justify-around p-10"
    >
      <a
        href="/"
        className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0 ml-12"
      >
        <img width="70%" src={logo} alt="logo" />
      </a>
      <div className="flex items-center justify-around w-2/3 pt-5 lg:pt-0 lg:w-1/3 ">
        <a
          href="/"
          className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0"
        >
          <img width="100%" src={qr} alt="QR" />
        </a>
      </div>
      <div className="mt-10 text-lg text-blue-800 lg:mt-0">
        Copyright 2023 Eli-Mleli
      </div>
    </div>
  );
};

export default Footer;
