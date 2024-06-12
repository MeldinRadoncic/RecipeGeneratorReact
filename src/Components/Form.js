import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import baseUrl from "../config/baseUrl";
import Loading from "./Loading";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] =
    useState({
      food: "",
      calories: 1000,
      language: "English",
    });

  const [loading, setLoading] =
    useState(false);
  const [error, setError] =
    useState(null);

  const handleInputChange = (
    name,
    value,
  ) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${baseUrl}/api/generate_recipe`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            
          },
          body: JSON.stringify(
            formData,
          ),
        },
      );

      if (!response.ok) {
        throw new Error(
          `Error: ${response.statusText}`,
        );
      }

      const data =
        await response.json();
      onSubmit(data); // Pass the received data to the onSubmit function provided by the App component
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-8 mt-16'>
      <form
        className='flex flex-col w-full md:w-1/2 mx-auto'
        onSubmit={handleSubmit}>
        <div>
          <InputField
            label='food'
            type='text'
            id='food'
            required
            name='food'
            placeholder='Enter your ingredients'
            onChange={(value) =>
              handleInputChange(
                "food",
                value,
              )
            }
            value={formData.food}
          />

          <InputField
            label='How many Calories?'
            type='number'
            id='calories'
            name='calories'
            placeholder='How many calories do you want?'
            onChange={(value) =>
              handleInputChange(
                "calories",
                value,
              )
            }
            value={formData.calories}
          />

          <InputField
            label='Language'
            id='language'
            name='language'
            type='select'
            onChange={(value) =>
              handleInputChange(
                "language",
                value,
              )
            }
            value={formData.language}
            options={[
              "English",
              "French",
              "Spanish",
              "Bosnian",
            ]}
          />
        </div>

        <div>
  <Button
    label={loading ? <Loading /> : "Let's Cook!"}
    disabled={loading}
    type={"submit"}
    className={
      loading
        ? "disabled-button primary-button mt-6 mx-auto w-full mt-8"
        : "primary-button mt-6 mx-auto w-full mt-8"
    }
  />
</div>

        {error && (
          <p className='error mt-4 text-red-500 text-center'>
            {error} Error
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
