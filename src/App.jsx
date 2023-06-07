import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import PostIntro from "./components/PostIntro/PostIntro";
import Login from "./components/Login/Login"
import { LoggedContext } from './context/LoggedContext';
import { IndexContext } from './context/IndexContext';
import { InnerContext } from "./context/InnerContext";
import { SectionContext } from "./context/SectionContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {

  const [logged, setLogged] = useState('');
  const [userIndex, setUserIndex] = useState('');
  const [inner, setInner] = useState('');
  const [section, setSection] = useState('');

  return (
    <div id="app-container">
      <LoggedContext.Provider value={{ logged, setLogged }}>
        <IndexContext.Provider value={{ userIndex, setUserIndex }}>
          <SectionContext.Provider value={{ section, setSection }}>
            <InnerContext.Provider value={{ inner, setInner }}>
              <Routes>
                <Route path="/" element={<div> <Header /> <Outlet /> <Footer /></div>}>
                  <Route index element={<HomePage />} />
                  <Route path="PostPage" element={<PostPage />} />
                  <Route path="PostIntro" element={<PostIntro />} />
                  <Route path="Environment" element={<Environment />} />
                  <Route path="General" element={<General />} />
                  <Route path="Tips" element={<Tips />} />
                  <Route path="RecyclePage" element={<RecyclePage />} />
                  <Route path="Guide" element={<Guide />} />
                  <Route path="RecycleLocations" element={<RecycleLocations />} />
                  <Route path="Requests" element={<Requests />} />
                  <Route path="SecondHand" element={<SecondHand />} />
                  <Route path="Clothing" element={<Clothing />} />
                  <Route path="ElectricProducts" element={<ElectricProducts />} />
                  <Route path="Furniture" element={<Furniture />} />
                  <Route path="Login" element={<Login />} />
                </Route>
              </Routes>
            </InnerContext.Provider>
          </SectionContext.Provider>
        </IndexContext.Provider>
      </LoggedContext.Provider>
    </div>
  );
}
export default App;
