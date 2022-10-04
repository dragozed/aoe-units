import React from "react";

//mui components
import { Checkbox, FormControlLabel, Slider } from "@mui/material";
function CostsFilter(props) {
  const setWoodFilter = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      woodFilter: value,
    }));
  };
  const setWoodFilterActive = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      woodFilterActive: value,
    }));
  };
  const setFoodFilter = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      foodFilter: value,
    }));
  };
  const setFoodFilterActive = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      foodFilterActive: value,
    }));
  };
  const setGoldFilter = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      goldFilter: value,
    }));
  };
  const setGoldFilterActive = (value) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      goldFilterActive: value,
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
                  if (props.woodFilterActive) {
                    setWoodFilter([0, 225]);
                  }
                  setWoodFilterActive(!props.woodFilterActive);
                }}
              />
            }
            label="Wood"
          />
          <Slider
            sx={{ width: 400, marginRight: 3 }}
            disabled={!props.woodFilterActive}
            min={0}
            max={225}
            value={props.woodFilter}
            onChange={(e) => setWoodFilter(e.target.value)}
            getAriaLabel={() => "Default"}
            valueLabelDisplay="auto"
          />
          <div>{props.woodFilter[0] + "-" + props.woodFilter[1]}</div>
        </div>
        <div className="range-filter">
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                onChange={() => {
                  if (props.foodFilterActive) {
                    setFoodFilter([0, 225]);
                  }
                  setFoodFilterActive(!props.foodFilterActive);
                }}
              />
            }
            label="Food"
          />
          <Slider
            sx={{ width: 400, marginRight: 3 }}
            disabled={!props.foodFilterActive}
            min={0}
            max={225}
            value={props.foodFilter}
            onChange={(e) => setFoodFilter(e.target.value)}
            getAriaLabel={() => "Default"}
            valueLabelDisplay="auto"
          />
          <div>{props.foodFilter[0] + "-" + props.foodFilter[1]}</div>
        </div>
        <div className="range-filter">
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={false}
                onChange={() => {
                  if (props.goldFilterActive) {
                    setGoldFilter([0, 225]);
                  }
                  setGoldFilterActive(!props.goldFilterActive);
                }}
              />
            }
            label="Gold"
          />
          <Slider
            sx={{ width: 400, marginRight: 3 }}
            disabled={!props.goldFilterActive}
            min={0}
            max={225}
            value={props.goldFilter}
            onChange={(e) => setGoldFilter(e.target.value)}
            getAriaLabel={() => "Default"}
            valueLabelDisplay="auto"
          />
          <div>{props.goldFilter[0] + "-" + props.goldFilter[1]}</div>
        </div>
      </div>
    </>
  );
}

export default CostsFilter;
