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
  }, []);

  const [filters, setFilters] = useState({
    ageFilter: "All",
    woodFilter: 200,
    foodFilter: 200,
    goldFilter: 200,
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
          woodFilter={filters.woodFilter}
          foodFilter={filters.foodFilter}
          goldFilter={filters.goldFilter}
        />
      </div>
      <div className="units-container">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Costs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  sx={{ height: 75 }}
                  key={item.id}
                  className={
                    (filters.ageFilter !== "All" &&
                      filters.ageFilter !== item.age) ||
                    (item.cost !== null && item.cost.Wood !== undefined
                      ? filters.woodFilter < item.cost.Wood
                      : "") ||
                    (item.cost !== null && item.cost.Food !== undefined
                      ? filters.foodFilter < item.cost.Food
                      : "") ||
                    (item.cost !== null && item.cost.Gold !== undefined
                      ? filters.goldFilter < item.cost.Gold
                      : "")
                      ? "hidden"
                      : ""
                  }
                >
                  <TableCell component={"th"} scope="row" align="center">
                    <Link to={`/units/${item.id}`}>{item.id}</Link>
                  </TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.age}</TableCell>
                  <TableCell align="center">
                    {item.cost !== null ? displayWood(item) : <div>Null</div>}
                    {item.cost !== null ? displayFood(item) : ""}
                    {item.cost !== null ? displayGold(item) : ""}
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
