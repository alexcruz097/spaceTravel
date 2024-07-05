import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild";
import Spacecraft from "../pages/Spacecraft/Spacecraft";
import Planets from "../pages/Planets/Planets";

function AppRoute() {
  return (
    // todo render routes

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spacecrafts" element={<Spacecrafts />} />
      <Route path="/spacecraftbuild" element={<SpacecraftBuild />} />
      <Route path="/spacecraft" element={<Spacecraft />} />
      <Route path="/planets" element={<Planets />} />
    </Routes>
  );
}

export default AppRoute;
