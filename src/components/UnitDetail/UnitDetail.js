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
  TableRow,
  Paper,
} from "@mui/material";

function UnitDetail() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.unitsData);
  const { unitId } = useParams();

  useEffect(() => {
    dispatch(unitsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data.map((item) =>
    item.id === ~~unitId //double tilde => string to number
      ? (console.log(typeof unitId),
        (
          <div key={item.id} className="unit-detail-container">
            <div className="unit-text">{item.name} Unit Detail</div>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="table-head" align="center">
                      ID:
                    </TableCell>
                    <TableCell className="table-row" align="center">
                      {item.id}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="table-head" align="center">
                      Name:
                    </TableCell>
                    <TableCell className="table-row" align="center">
                      {item.name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="table-head" align="center">
                      Description:
                    </TableCell>
                    <TableCell className="table-row" align="center">
                      {item.description}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="table-head" align="center">
                      Min. Required Age:
                    </TableCell>
                    <TableCell className="table-row" align="center">
                      {item.age}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="table-head" align="center">
                      Expansion:
                    </TableCell>
                    <TableCell className="table-row" align="center">
                      {item.expansion}
                    </TableCell>
                  </TableRow>
                  {item.cost && item.cost.Wood !== undefined ? (
                    <TableRow>
                      <TableCell className="table-head" align="center">
                        Wood Cost:
                      </TableCell>
                      <TableCell className="table-row" align="center">
                        {item.cost.Wood}
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )}
                  {item.cost && item.cost.Food !== undefined ? (
                    <TableRow>
                      <TableCell className="table-head" align="center">
                        Food Cost:
                      </TableCell>
                      <TableCell className="table-row" align="center">
                        {item.cost.Food}
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )}
                  {item.cost && item.cost.Gold !== undefined ? (
                    <TableRow>
                      <TableCell className="table-head" align="center">
                        Gold Cost:
                      </TableCell>
                      <TableCell className="table-row" align="center">
                        {item.cost.Gold}
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )}
                  {item.build_time !== undefined ? (
                    <TableRow>
                      <TableCell className="table-head" align="center">
                        Build Time:
                      </TableCell>
                      <TableCell className="table-row" align="center">
                        {item.build_time}
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )}
                  {item.reload_time !== undefined ? (
                    <TableRow>
                      <TableCell className="table-head" align="center">
                        Reload Time:
                      </TableCell>
                      <TableCell className="table-row" align="center">
                        {item.reload_time}
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )}
                  <TableRow>
                    <TableCell className="table-head" align="center">
                      Hit Points:
                    </TableCell>
                    <TableCell className="table-row" align="center">
                      {item.hit_points}
                    </TableCell>
                  </TableRow>
                  {item.attack !== undefined ? (
                    <TableRow>
                      <TableCell className="table-head" align="center">
                        Attack:
                      </TableCell>
                      <TableCell className="table-row" align="center">
                        {item.attack}
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )}
                  {item.accuracy !== undefined ? (
                    <TableRow>
                      <TableCell className="table-head" align="center">
                        Accuracy:
                      </TableCell>
                      <TableCell className="table-row" align="center">
                        {item.accuracy}
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))
      : ""
  );
}

export default UnitDetail;
