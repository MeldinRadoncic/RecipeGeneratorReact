import React, { useState } from "react";
import Button from "./Button";
import {
  FaSun,
  FaMoon,
  FaPlus,
} from "react-icons/fa";
const Navbar = ({
  onRestart,
  toggleTheme,
}) => {
  const theme =
    localStorage.getItem("theme");

  return (
    <nav className='flex items-center justify-between p-4 bg-gray-800'>
      <div className='flex items-center'>
        <img
          src='./logo.png'
          alt='Logo'
          className='h-8 w-8'
        />
        <h1 className='text-white ml-2 text-xl text-extrabold'>
          Recipe Generator
        </h1>
      </div>
      <div className='flex mx-2'>
        <Button
          label={
            <FaPlus title='New Recipe' />
          }
          className='px-4 mx-2 py-2 text-white bg-green-500 rounded'
          onClick={onRestart}
        />

        <Button
          label={
            theme === "dark-mode" ? (
              <FaSun title='Light Mode' />
            ) : (
              <FaMoon title='Dark Mode' />
            )
          }
          onClick={toggleTheme}
          className='px-4 mx-2 py-2 text-white bg-blue-500 rounded'
        />
      </div>
    </nav>
  );
};

export default Navbar;
