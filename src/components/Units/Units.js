import { useDispatch, useSelector } from "react-redux";
import { unitsList } from "../../redux/unitsAction";
import { useEffect, useState } from "react";
import "./Units.scss";
import Header from "../Header/Header";

function Units() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.unitsData);

  const [disableWood, setDisableWood] = useState(true);
  const [disableFood, setDisableFood] = useState(true);
  const [disableGold, setDisableGold] = useState(true);
  const [filters, setFilters] = useState({
    ageFilter: "All",
    woodFilter: 200,
    foodFilter: 200,
    goldFilter: 200,
  });

  const setAgeFilter = (age) => {
    setFilters((existingValues) => ({
      ...existingValues,
      ageFilter: age,
    }));
  };
  const setWoodFilter = (value) => {
    setFilters((existingValues) => ({
      ...existingValues,
      woodFilter: value,
    }));
    console.log(filters.woodFilter);
  };
  const setFoodFilter = (value) => {
    setFilters((existingValues) => ({
      ...existingValues,
      foodFilter: value,
    }));
    console.log(filters.foodFilter);
  };
  const setGoldFilter = (value) => {
    setFilters((existingValues) => ({
      ...existingValues,
      goldFilter: value,
    }));
    console.log(filters.goldFilter);
  };

  useEffect(() => {
    dispatch(unitsList());
  }, []);

  const displayWood = (item) => {
    let display;
    if (item.cost.Wood !== undefined) {
      display = <div>Wood: {item.cost.Wood}</div>;
    } else {
      display = "";
    }
    return display;
  };
  const displayFood = (item) => {
    let display;
    if (item.cost.Food !== undefined) {
      display = <div>Food: {item.cost.Food}</div>;
    } else {
      display = "";
    }
    return display;
  };
  const displayGold = (item) => {
    let display;
    if (item.cost.Gold !== undefined) {
      display = <div>Gold: {item.cost.Gold}</div>;
    } else {
      display = "";
    }
    return display;
  };

  return (
    <>
      <Header />
      <div className="filters-container">
        <div>
          <div>Ages</div>
          <div className="ages-filter">
            <button
              onClick={() => {
                setAgeFilter("All");
              }}
              className={filters.ageFilter === "All" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => {
                setAgeFilter("Dark");
              }}
              className={filters.ageFilter === "Dark" ? "active" : ""}
            >
              Dark
            </button>
            <button
              onClick={() => {
                setAgeFilter("Feudal");
              }}
              className={filters.ageFilter === "Feudal" ? "active" : ""}
            >
              Feudal
            </button>
            <button
              onClick={() => {
                setAgeFilter("Castle");
              }}
              className={filters.ageFilter === "Castle" ? "active" : ""}
            >
              Castle
            </button>
            <button
              onClick={() => {
                setAgeFilter("Imperial");
              }}
              className={filters.ageFilter === "Imperial" ? "active" : ""}
            >
              Imperial
            </button>
          </div>
        </div>
        <div>
          <div>Costs</div>
          <div className="costs-filter">
            <div className="range-filter">
              <input
                type={"checkbox"}
                onChange={() => setDisableWood(!disableWood)}
              />
              <div>Wood</div>
              <input
                disabled={disableWood}
                type="range"
                min="0"
                max="200"
                value={filters.woodFilter}
                className=""
                onChange={(e) => setWoodFilter(e.target.value)}
              />
              <div>{filters.woodFilter}</div>
            </div>
            <div className="range-filter">
              <input
                type={"checkbox"}
                onChange={() => setDisableFood(!disableFood)}
              />
              <div>Food</div>
              <input
                disabled={disableFood}
                type="range"
                min="0"
                max="200"
                value={filters.foodFilter}
                className=""
                onChange={(e) => setFoodFilter(e.target.value)}
              />
              <div>{filters.foodFilter}</div>
            </div>
            <div className="range-filter">
              <input
                type={"checkbox"}
                onChange={() => setDisableGold(!disableGold)}
              />
              <div>Gold</div>
              <input
                disabled={disableGold}
                type="range"
                min="0"
                max="200"
                value={filters.goldFilter}
                className=""
                onChange={(e) => setGoldFilter(e.target.value)}
              />
              <div>{filters.goldFilter}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="units-container">
        <div className="unit">
          <div>id:</div>
          <div>Name: </div>
          <div>Age: </div>
          <div>Costs:</div>
        </div>
        {data.map((item) => (
          <div
            className={
              filters.ageFilter !== "All" && filters.ageFilter !== item.age
                ? "hidden"
                : ""
            }
            key={item.id}
          >
            <div className="unit">
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.age}</div>
              <div>{item.visilibity !== undefined ? "false" : "as"}</div>
              {item.cost !== null ? displayWood(item) : <div>Null</div>}
              {item.cost !== null ? displayFood(item) : ""}
              {item.cost !== null ? displayGold(item) : ""}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Units;
