import { useDispatch, useSelector } from "react-redux";
import { unitsList } from "../../redux/unitsAction";
import { useEffect, useState } from "react";
import "./Units.scss";
import Header from "../Header/Header";
import CostsFilter from "./CostsFilter/CostsFilter";
import AgesFilter from "./AgesFilter/AgesFilter";

function Units() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.unitsData);

  const [filters, setFilters] = useState({
    ageFilter: "All",
    woodFilter: 200,
    foodFilter: 200,
    goldFilter: 200,
  });

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
        <AgesFilter setFilters={setFilters} ageFilter={filters.ageFilter} />
        <CostsFilter
          setFilters={setFilters}
          woodFilter={filters.woodFilter}
          foodFilter={filters.foodFilter}
          goldFilter={filters.goldFilter}
        />
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
