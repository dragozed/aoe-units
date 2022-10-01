import React from "react";

function AgesFilter(props) {
  const setAgeFilter = (age) => {
    props.setFilters((existingValues) => ({
      ...existingValues,
      ageFilter: age,
    }));
  };
  return (
    <>
      <div>Ages</div>
      <div className="ages-filter">
        <button
          onClick={() => {
            setAgeFilter("All");
          }}
          className={props.ageFilter === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => {
            setAgeFilter("Dark");
          }}
          className={props.ageFilter === "Dark" ? "active" : ""}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setAgeFilter("Feudal");
          }}
          className={props.ageFilter === "Feudal" ? "active" : ""}
        >
          Feudal
        </button>
        <button
          onClick={() => {
            setAgeFilter("Castle");
          }}
          className={props.ageFilter === "Castle" ? "active" : ""}
        >
          Castle
        </button>
        <button
          onClick={() => {
            setAgeFilter("Imperial");
          }}
          className={props.ageFilter === "Imperial" ? "active" : ""}
        >
          Imperial
        </button>
      </div>
    </>
  );
}

export default AgesFilter;
