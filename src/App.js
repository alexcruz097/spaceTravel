import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto/Motto";
import Loading from "./components/Loading/Loading";

function App() {
  const { isLoading } = useContext(LoadingContext);
  // todo wrap with BrowserRouter and render the necessary components

  return (
    <>
      <BrowserRouter>
        <div className={styles["app"]}>
          <header className={styles["app__header"]}>
            <NavigationBar />
          </header>

          <main className={styles["app__main"]}>todo</main>

          <footer className={styles["app__footer"]}>todo</footer>
        </div>
      </BrowserRouter>
      {
        // todo render Loading based on its condition
      }
    </>
  );
}

export default App;
