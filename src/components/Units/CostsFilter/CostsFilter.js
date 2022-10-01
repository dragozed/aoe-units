import React, { useState } from "react";

function CostsFilter(props) {
  const [disableWood, setDisableWood] = useState(true);
  const [disableFood, setDisableFood] = useState(true);
  const [disableGold, setDisableGold] = useState(true);

  const setWoodFilter = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      woodFilter: value,
    }));
  };
  const setFoodFilter = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      foodFilter: value,
    }));
  };
  const setGoldFilter = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      goldFilter: value,
    }));
  };
  return (
    <>
      <div>Costs</div>
      <div className="costs-filter">
        <div className="range-filter">
          <input
            type={"checkbox"}
            onChange={() => {
              if (!disableWood) {
                setWoodFilter(200);
              }
              setDisableWood(!disableWood);
            }}
          />
          <div>Wood</div>
          <input
            disabled={disableWood}
            type="range"
            min="0"
            max="200"
            value={props.woodFilter}
            className=""
            onChange={(e) => setWoodFilter(e.target.value)}
          />
          <div>{props.woodFilter}</div>
        </div>
        <div className="range-filter">
          <input
            type={"checkbox"}
            onChange={() => {
              if (!disableFood) {
                setFoodFilter(200);
              }
              setDisableFood(!disableFood);
            }}
          />
          <div>Food</div>
          <input
            disabled={disableFood}
            type="range"
            min="0"
            max="200"
            value={props.foodFilter}
            className=""
            onChange={(e) => setFoodFilter(e.target.value)}
          />
          <div>{props.foodFilter}</div>
        </div>
        <div className="range-filter">
          <input
            type={"checkbox"}
            onChange={() => {
              if (!disableGold) {
                setGoldFilter(200);
              }
              setDisableGold(!disableGold);
            }}
          />
          <div>Gold</div>
          <input
            disabled={disableGold}
            type="range"
            min="0"
            max="200"
            value={props.goldFilter}
            className=""
            onChange={(e) => setGoldFilter(e.target.value)}
          />
          <div>{props.goldFilter}</div>
        </div>
      </div>
    </>
  );
}

export default CostsFilter;
