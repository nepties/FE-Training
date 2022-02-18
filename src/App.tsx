import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound, Characters, Equipments, Sudoku } from "./pages";

import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
