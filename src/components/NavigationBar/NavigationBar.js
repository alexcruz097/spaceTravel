import { NavLink } from "react-router-dom";

import styles from "./NavigationBar.module.css";
import earth from "../images/earth.png";
import rocket from "../images/rocket.png";
import planets from "../images/planets.png";
function NavigationBar() {
  let textDecoration = {
    textDecoration: "none",
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to={"/"} style={textDecoration}>
        <p>
          {" "}
          <img src={earth} />
          Home{" "}
        </p>
      </NavLink>
      <NavLink to={"/spacecrafts"} style={textDecoration}>
        <p>
          <img src={rocket} /> Spacecrafts{" "}
        </p>
      </NavLink>
      <NavLink to={"/planets"} style={textDecoration}>
        <p>
          <img src={planets} /> Planets{" "}
        </p>
      </NavLink>
    </nav>
    // todo
  );
}

export default NavigationBar;
