import React, { useState } from "react";

//mui components
import { Checkbox, FormControlLabel, Slider } from "@mui/material";
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
      <div className="costs-filter">
        <div className="costs-text">Costs</div>
        <div className="range-filter">
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                onChange={() => {
                  if (!disableWood) {
                    setWoodFilter(225);
                  }
                  setDisableWood(!disableWood);
                }}
              />
            }
            label="Wood"
          />
          <Slider
            sx={{ width: 150, marginRight: 3 }}
            disabled={disableWood}
            min={0}
            max={225}
            value={props.woodFilter}
            onChange={(e) => setWoodFilter(e.target.value)}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          <div>{props.woodFilter}</div>
        </div>
        <div className="range-filter">
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                onChange={() => {
                  if (!disableFood) {
                    setFoodFilter(225);
                  }
                  setDisableFood(!disableFood);
                }}
              />
            }
            label="Food"
          />
          <Slider
            sx={{ width: 150, marginRight: 3 }}
            disabled={disableFood}
            min={0}
            max={225}
            value={props.foodFilter}
            onChange={(e) => setFoodFilter(e.target.value)}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          <div>{props.foodFilter}</div>
        </div>
        <div className="range-filter">
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                onChange={() => {
                  if (!disableGold) {
                    setGoldFilter(225);
                  }
                  setDisableGold(!disableGold);
                }}
              />
            }
            label="Gold"
          />
          <Slider
            sx={{ width: 150, marginRight: 3 }}
            disabled={disableGold}
            min={0}
            max={225}
            value={props.goldFilter}
            onChange={(e) => setGoldFilter(e.target.value)}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          <div>{props.goldFilter}</div>
        </div>
      </div>
    </>
  );
}

export default CostsFilter;
