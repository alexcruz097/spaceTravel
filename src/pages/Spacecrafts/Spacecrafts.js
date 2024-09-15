import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Spacecrafts.module.css";
import { LoadingContext } from "../../context/LoadingProvider";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import SpaceTravelMockApi from "../../services/SpaceTravelMockApi";
function Spacecrafts() {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const { enableLoading, disableLoading } = useContext(LoadingContext);
  async function getSpacecrafts() {
    // todo get spacecrafts using the API
    const results = await SpaceTravelApi.getSpacecrafts();
    // clear spacecraft on the page
    setSpacecrafts([]);
    console.log(spacecrafts);

    // update data
    setSpacecrafts([...spacecrafts, ...results.data]);
  }
  useEffect(() => {
    async function runGetSpacecrafts() {
      enableLoading();

      // calll spacecraft
      await getSpacecrafts();
      disableLoading();
    }
    runGetSpacecrafts();
  }, [enableLoading, disableLoading]);

  const navigate = useNavigate();

  function handleClickOfBuild() {
    // todo navigate to build spacecraft page
    navigate("/spacecraftbuild");
  }

  function handleClickOfImageContainer(event, id) {
    navigate(`/spacecraft/${id}`);
  }

  async function handleClickOfDestroy(event, id) {
    enableLoading();
    const { isError } = await SpaceTravelApi.destroySpacecraftById({ id });
    if (!isError) {
      // clear the page
      // clear spacecraft on the page

      await getSpacecrafts();
    }
    disableLoading();
  }
  return (
    <div>
      <button onClick={handleClickOfBuild}>🏗 Build a Spacecraft</button>
      <div>
        {spacecrafts?.map((spacecraft, index) => (
          <div key={spacecraft.id} className={styles["spacecraft"]}>
            <div
              className={styles["spacecraft__imageContainer"]}
              onClick={(event) =>
                handleClickOfImageContainer(event, spacecraft.id)
              }
            >
              {spacecraft.pictureUrl ? (
                <img
                  src={spacecraft.pictureUrl}
                  alt={`The spacecraft ${spacecraft.name}`}
                  className={styles["spacecraft__image"]}
                />
              ) : (
                <span className={styles["spacecraft__image--default"]}>🚀</span>
              )}
            </div>

            <div className={styles["spacecraft__infoContainer"]}>
              <div className={styles["spacecraft__info"]}>
                <span>Name: </span>
                {/* <span> {spacecraft[index]["name"]}</span> */}
                <span> {spacecraft.name}</span>
              </div>

              <div className={styles["spacecraft__info"]}>
                <span>Capacity:</span>
                {/* <span>{spacecraft[index]["capacity"]}</span> */}
                <span>{spacecraft.capacity}</span>
              </div>
            </div>

            <div>
              <button
                onClick={(event) => handleClickOfDestroy(event, spacecraft.id)}
              >
                💥 Destroy
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* add a tag is there are no spacecraft to show */}
      {spacecrafts === undefined || spacecrafts.length == 0 ? (
        <div className="text-center">No spacecraft to show</div>
      ) : null}
    </div>
  );
}

export default Spacecrafts;
