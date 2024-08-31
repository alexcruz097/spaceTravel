import { useContext } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto/Motto";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import Spacecrafts from "./pages/Spacecrafts/Spacecrafts";
import Planets from "./pages/Planets/Planets";
import Spacecraft from "./pages/Spacecraft/Spacecraft";
import SpacecraftBuild from "./pages/SpacecraftBuild/SpacecraftBuild";
import spaceDB from "./services/SpaceTravelMockApi";
function App() {
  const { isLoading } = useContext(LoadingContext);
  // todo wrap with BrowserRouter and render the necessary components

  console.log(Spacecrafts)
  return (
    <>
      <BrowserRouter>
        <div className={styles["app"]}>
          <header className={styles["app__header"]}>
            <NavigationBar />
          </header>
          {/* routes for the pages */}
          <main className={styles["app__main"]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/spacecrafts" element={<Spacecrafts />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/spacecraft" element={<Spacecraft />} />
              <Route path="/spacecraftbuild" element={<SpacecraftBuild spaceDB={spaceDB.MOCK_DB}/>} />

              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <footer className={styles["app__footer"]}>
            <Motto />
          </footer>
        </div>
      </BrowserRouter>
      {
        // todo render Loading based on its condition
      }
    </>
  );
}

export default App;
