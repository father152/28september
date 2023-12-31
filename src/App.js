import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout.jsx";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
