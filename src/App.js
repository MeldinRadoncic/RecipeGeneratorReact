import React, {
  useEffect,
  useState,
} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import DisplayData from "./Components/DisplayData";
import baseUrl from "./config/baseUrl";

const App = () => {
  const [
    receivedData,
    setReceivedData,
  ] = useState(null);
  const [theme, setTheme] =
    useState(false);

  const getTheme =
    localStorage.getItem("theme");
  const currentTheme =
    (document.body.className =
      getTheme);

  const handleRestart = () => {
    setReceivedData(null);
  };

  const handleFormSubmit = (data) => {
    setReceivedData(data);
  };

  const handleToggleTheme = () => {
    setTheme((theme) => !theme);
    localStorage.setItem(
      "theme",
      !theme
        ? "dark-mode"
        : "light-mode",
    );
  };

  return (
    <div className={currentTheme}>
      <Navbar
        onRestart={handleRestart}
        toggleTheme={handleToggleTheme}
      />
      <Routes>
        <Route
          path='/'
          element={
            receivedData
              ? [
                  <Banner />,
                  <DisplayData
                    data={receivedData}
                  />,
                ]
              : [
                  <Banner />,
                  <Form
                    onSubmit={
                      handleFormSubmit
                    }
                  />,
                ]
          }
        />

        <Route
          path='*'
          element={<h1>Not Found</h1>}
        />
      </Routes>
    </div>
  );
};

export default App;
