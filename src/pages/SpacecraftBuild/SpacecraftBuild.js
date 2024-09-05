import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SpacecraftBuild.module.css";
import { LoadingContext } from "../../context/LoadingProvider";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import SpaceTravelMockApi from "../../services/SpaceTravelMockApi";
function SpacecraftBuild() {

  const INITIAL_SPACECRAFT = {
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  };
  const [spacecraft, setSpacecraft] = useState(INITIAL_SPACECRAFT);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { enableLoading, disableLoading } = useContext(LoadingContext);

  function handleChangeOfFormInput(event) {
    // todo update form state
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = event.target;

    setSpacecraft({
      ...spacecraft,
      [name]: value,
    });
  }
  async function handleSubmitOfForm(event) {
    event.preventDefault();
    // todo submit the form using the API
    console.log(spacecraft);
    console.log(SpaceTravelApi.buildSpacecraft(spacecraft));

    // SpaceTravelApi.buildSpacecraft({
    //   name: "Endeavor",
    //   capacity: "3000",
    //   description: "Endeavor go beyond",
    //   pictureUrl:
    //     "https://www.dailynews.com/wp-content/uploads/2023/07/LDN-L-SHUTTLE-0721-DC-7.jpg?w=525",
    // });
    // console.log(SpaceTravelMockApi.MOCK_DB.spacecrafts);
  }

  function handleClickOfBack(event) {
    // todo navigate back
    navigate("/spacecrafts");
  }

  return (
    <>
      <button className={styles["button__back"]} onClick={handleClickOfBack}>
        Back 👈
      </button>
      <div>
        <form onSubmit={handleSubmitOfForm}>
          <div className={styles["form"]}>
            <div className={styles["form__inputs"]}>
              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={spacecraft.name}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
              </div>

              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="capacity"
                  placeholder="Capacity"
                  value={spacecraft.capacity}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
              </div>

              <div className={styles["form__inputContainer"]}>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={spacecraft.description}
                  onChange={handleChangeOfFormInput}
                />
              </div>

              <div className={styles["form__inputContainer"]}>
                <input
                  type="text"
                  name="pictureUrl"
                  placeholder="Picture URL"
                  value={spacecraft.pictureUrl}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className={styles["submitContainer"]}>
              <div className={styles["errorContainer"]}>
                {errors.map((error, index) => (
                  <div key={index} className={styles["error"]}>
                    {error}
                  </div>
                ))}
              </div>

              <div className={styles["button__submit"]}>
                <button type="submit" onClick={handleSubmitOfForm}>
                  Build 🏗️
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SpacecraftBuild;
