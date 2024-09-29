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
    currentLocation: 0,
  };
  const [spacecraft, setSpacecraft] = useState(INITIAL_SPACECRAFT);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { enableLoading, disableLoading } = useContext(LoadingContext);
  const [isFormFilled, setIsFormFilled] = useState(false);

  function handleChangeOfFormInput(event) {
    const { name, value } = event.target;

    setSpacecraft({
      ...spacecraft,
      [name]: value,
    });
    // validate form
    validateForm(spacecraft);
  }
  console.log(spacecraft)

  // validate if image exist
  async function checkImage(url) {
    const res = await fetch(url);
    const buff = await res.blob();
    return buff.type.startsWith("image/");
  }

  const validateForm = (spacecraft) => {
    // validate for button
    if (
      spacecraft.name !== "" &&
      spacecraft.capacity !== "" &&
      spacecraft.description !== ""
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };
  async function handleSubmitOfForm(event) {
    event.preventDefault();

    //  check is it is empty
    if (spacecraft.name === "") {
      alert("Please Fill in the NAME of spacecraft");
    } else if (spacecraft.capacity === "") {
      alert("Please fill in the capacity of spacecraft");
    } else if (spacecraft.description === "") {
      alert("Please DESCRIBE your spacecraft");
    } else if ((await checkImage(spacecraft.pictureUrl)) == false) {
      alert("Please input a valid image URl");
    } else {
      SpaceTravelApi.buildSpacecraft(spacecraft);

      // clear form
      setSpacecraft({
        name: "",
        capacity: "",
        description: "",
        pictureUrl: "",
      });
    }
  }
  function handleClickOfBack(event) {
    // todo navigate back
    navigate("/spacecrafts");
  }

  // disable button
  const disable = {
    border: "1px solid #999999",
    backgroundColor: "#cccccc",
    color: "#666666",
  };

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
                  required
                />
              </div>
              <div className={styles["form__inputContainer"]}>
                <input
                  type="number"
                  name="capacity"
                  placeholder="Capacity"
                  value={spacecraft.capacity}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                  required
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
                  type="drowdown"
                  name="pictureUrl"
                  placeholder="Picture URL"
                  value={spacecraft.pictureUrl}
                  onChange={handleChangeOfFormInput}
                  autoComplete="off"
                />
              </div>
              <select
                name="currentLocation"
                value={spacecraft.currentLocation}
                onChange={handleChangeOfFormInput}
              >
                <option value="0">Mercury</option>
                <option value="1">Venus</option>
                <option value="2">Earth</option>
                <option value="3">Mars</option>
                <option value="4">Jupiter</option>
                <option value="5">Saturn</option>
                <option value="6">Uranus</option>
                <option value="7">Neptune</option>
              </select>
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
                <button
                  type="submit"
                  onClick={handleSubmitOfForm}
                  disabled={!isFormFilled}
                  style={isFormFilled ? null : disable}
                >
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
