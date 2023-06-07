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
      <Route path="/" element={<Layout />}/>
          <Route index element={<HomePage />}/>
          <Route path="PostPage" element={<PostPage/>}/>
          <Route path="PostUploader" element={<PostUploader/>}/>
          <Route path="PostIntro" element={<PostIntro/>}/>
          <Route path="Environment" element={<Environment/>}/>
          <Route path="General" element={<General/>}/>
          <Route path="Tips" element={<Tips/>}/>
          <Route path="RecyclePage" element={<RecyclePage/>}/>
          <Route path="Guide" element={<Guide/>}/>
          <Route path="RecycleLocations" element={<RecycleLocations/>}/>
          <Route path="Requests" element={<Requests/>}/>
          <Route path="SecondHand" element={<SecondHand/>}/>
          <Route path="Clothing" element={<Clothing/>}/>
          <Route path="ElectricProducts" element={<ElectricProducts/>}/>
          <Route path="Furniture" element={<Furniture/>}/>
      </Routes>
    </div>
  );
}
export default App;
