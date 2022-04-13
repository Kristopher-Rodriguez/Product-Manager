import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<OneProduct />} path="/product/:id" />
          <Route element={<UpdateProduct />} path="/product/edit/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
