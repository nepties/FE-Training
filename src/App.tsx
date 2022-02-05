import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Equipments, Sudoku } from "./pages";
import CharactersPage from "./pages/characters/CharactersPage";

import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/sudoku" element={<Sudoku />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
