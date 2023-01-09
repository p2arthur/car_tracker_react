import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: { carsList: [], searchTerm: "" },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //Assumption: action.payload === {name:"", cost:x}
      state.carsList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      //Assumption: action.payload === car.id
      console.log(action.payload);
      const updated = state.carsList.filter((car) => car.id !== action.payload);
      console.log(updated);

      state.carsList = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
