import { takeEvery, put } from "redux-saga/effects";
import { UNITS_LIST, SET_UNITS_LIST } from "./constants";

function* getUnits() {
  let data = yield fetch("../age-of-empires-units.json"); //fetch from public
  data = yield data.json();
  data = data.units;
  yield put({ type: SET_UNITS_LIST, data });
}

function* unitsSaga() {
  yield takeEvery(UNITS_LIST, getUnits);
}

export default unitsSaga;
