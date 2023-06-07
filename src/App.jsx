import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import Environment from "./components/EnvironmentMaintenance/Environment";
import General from "./components/EnvironmentMaintenance/General/General";
import Tips from "./components/EnvironmentMaintenance/Tips/Tips";
import RecyclePage from "./components/RecyclePage/RecyclePage";
import Guide from "./components/RecyclePage/Guide/Guide";
import RecycleLocations from "./components/RecyclePage/RecycleLocations/RecycleLocations";
import Requests from "./components/RecyclePage/Requests/Requests";
import SecondHand from "./components/SecondHand/SecondHand";
import Clothing from "./components/SecondHand/Clothing/Clothing";
import ElectricProducts from "./components/SecondHand/ElectricProducts/ElectricProducts";
import Furniture from "./components/SecondHand/Furniture/Furniture";
import PostPage from "./components/PostPage/PostPage";
import PostUploader from "./components/PostUploader/PostUploaer";
import PostIntro from "./components/PostIntro";

function App() {
  return (
    <div id="app-container">
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
