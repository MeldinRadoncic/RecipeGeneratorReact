import React from "react";

import {
  formatRecipe,
  downloadPDF,
} from "../utils/recipeUtils";
import Button from "./Button";
import { FaFilePdf } from "react-icons/fa";

const DisplayData = ({ data }) => {
  return (
    <div
      id='recipe-content'
      className='pt-8 px-4'>
      <>
        <h1 className='primary-heading text-center'>
          RECIPE
        </h1>
        <ul className='list-disc list-inside text-center text-lg'>
          <li className='text-center'>
            <strong>
              Ingredients:
            </strong>{" "}
            {data?.food}
          </li>
          <li className='text-center'>
            <strong>Calories:</strong>{" "}
            {data?.calories}
          </li>
          <li className='text-center'>
            <strong>Language:</strong>{" "}
            {data?.language}
          </li>
        </ul>
        <div className='text-center paragraph mt-4 lg:w-1/2 mx-auto'>
          {formatRecipe(data?.recipe)}
          <div className='mt-4 mb-24'>
            <img
              src={data?.image_url}
              alt='Recipe'
              className='mx-auto mt-4 lg:mt-8 rounded-tl-lg rounded-tr-lg lg:w-1/2'
            />

            <Button
              label='Download'
              icon={
                <FaFilePdf size={14} />
              }
              onClick={() =>
                downloadPDF(data)
              }
              className={
                "download-button flex mx-auto w-full lg:w-1/2 justify-center align-center rounded-bl-lg rounded-br-lg"
              }
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default DisplayData;
