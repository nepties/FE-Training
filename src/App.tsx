import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Characters, Equipments, Sudoku } from "./pages";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/sudoku" element={<Sudoku />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
