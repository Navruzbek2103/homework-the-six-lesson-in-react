import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { dataContext } from "./context";

const index = () => {
  const [language, setLanguage] = useState("uz");
  const [them, setThem] = useState("dark");

  return (
    <>
      <dataContext.Provider value={them}>
        <Navbar setLang={setLanguage} lang={language} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About message={them} />} />
          </Routes>
        </main>
        <Footer lang={language} />
      </dataContext.Provider>
    </>
  );
};

export default index;
