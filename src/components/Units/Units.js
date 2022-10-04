import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unitsList } from "../../redux/unitsAction";
import { Link } from "react-router-dom";
import "./Units.scss";
import CostsFilter from "./CostsFilter/CostsFilter";
import AgesFilter from "./AgesFilter/AgesFilter";

//mui components
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Units() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.unitsData);

  useEffect(() => {
    dispatch(unitsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filters, setFilters] = useState({
    ageFilter: "All",
    woodFilter: [0, 225],
    foodFilter: [0, 225],
    goldFilter: [0, 225],
    woodFilterActive: false,
    foodFilterActive: false,
    goldFilterActive: false,
  });

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
      <div className="filters-container">
        <AgesFilter setFilters={setFilters} ageFilter={filters.ageFilter} />
        <CostsFilter
          setFilters={setFilters}
          filters={filters}
          woodFilter={filters.woodFilter}
          foodFilter={filters.foodFilter}
          goldFilter={filters.goldFilter}
          woodFilterActive={filters.woodFilterActive}
          foodFilterActive={filters.foodFilterActive}
          goldFilterActive={filters.goldFilterActive}
        />
      </div>
      <div className="units-container">
        <TableContainer component={Paper}>
          <Table component={"div"}>
            <TableHead component={"div"}>
              <TableRow component={"div"}>
                <TableCell
                  component={"div"}
                  className="table-head"
                  align="center"
                >
                  ID
                </TableCell>
                <TableCell
                  component={"div"}
                  className="table-head"
                  align="center"
                >
                  Name
                </TableCell>
                <TableCell
                  component={"div"}
                  className="table-head"
                  align="center"
                >
                  Age
                </TableCell>
                <TableCell
                  component={"div"}
                  className="table-head"
                  align="center"
                >
                  Costs
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody component={"div"}>
              {data.map((item) => (
                <TableRow
                  component={Link}
                  to={`/units/${item.id}`}
                  sx={{ height: 75 }}
                  key={item.id}
                  className={
                    (filters.ageFilter !== "All" &&
                      (filters.ageFilter === "Dark"
                        ? item.age !== "Dark"
                        : filters.ageFilter === "Feudal"
                        ? item.age !== "Feudal" && item.age !== "Dark"
                        : filters.ageFilter === "Castle"
                        ? item.age === "Imperial"
                        : "")) || //end of age filters
                    (item.cost && item.cost.Wood !== undefined
                      ? filters.woodFilter[1] < item.cost.Wood ||
                        item.cost.Wood < filters.woodFilter[0]
                      : "") ||
                    (item.cost && item.cost.Food !== undefined
                      ? filters.foodFilter[1] < item.cost.Food ||
                        item.cost.Food < filters.foodFilter[0]
                      : "") ||
                    (item.cost && item.cost.Gold !== undefined
                      ? filters.goldFilter[1] < item.cost.Gold ||
                        item.cost.Gold < filters.goldFilter[0]
                      : "") || //hide according to value range end
                    (item.cost === null || item.cost.Wood === undefined
                      ? filters.woodFilter[0] > 0
                      : "") ||
                    (item.cost === null || item.cost.Food === undefined
                      ? filters.foodFilter[0] > 0
                      : "") ||
                    (item.cost === null || item.cost.Gold === undefined
                      ? filters.goldFilter[0] > 0
                      : "") //hide free units and undefined material cost end
                      ? "table-row hidden"
                      : "table-row"
                  }
                >
                  <TableCell component={"div"} scope="row" align="center">
                    {item.id}
                  </TableCell>
                  <TableCell component={"div"} align="center">
                    {item.name}
                  </TableCell>
                  <TableCell component={"div"} align="center">
                    {item.age}
                  </TableCell>
                  <TableCell component={"div"} align="center">
                    {item.cost ? displayWood(item) : "Free Unit"}
                    {item.cost ? displayFood(item) : ""}
                    {item.cost ? displayGold(item) : ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Units;
