import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allCars: [],
    carForUpdate: null,
    trigger: true
}

const carsSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.allCars = action.payload;
        },
        updateCar: (state, action) => {
            state.carForUpdate = action.payload
        },
        changeTrigger: (state) => {
            state.trigger = !state.trigger
        }
    }
});

const {reducer:carReducer, actions} = carsSlice;
const carsActions = {
    ...actions
}

export {
    carReducer, carsActions
}