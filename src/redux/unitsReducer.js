import { SET_UNITS_LIST } from "./constants";

export const unitsData = (data = [], action) => {
  switch (action.type) {
    case SET_UNITS_LIST:
      return [...action.data];
    default:
      return data;
  }
};
