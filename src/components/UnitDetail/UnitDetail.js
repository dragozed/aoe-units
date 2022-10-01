import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./UnitDetail.scss";
import { unitsList } from "../../redux/unitsAction";

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

function UnitDetail() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.unitsData);
  const { unitId } = useParams();

  useEffect(() => {
    dispatch(unitsList());
  }, []);

  return data.map((item) =>
    item.id == unitId ? (
      <div className="unit-detail-container">
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center">ID:</TableCell>
                <TableCell align="center">{item.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Name:</TableCell>
                <TableCell align="center">{item.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Age:</TableCell>
                <TableCell align="center">{item.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Description:</TableCell>
                <TableCell align="center">{item.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Expansion:</TableCell>
                <TableCell align="center">{item.expansion}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    ) : (
      ""
    )
  );
}

export default UnitDetail;
