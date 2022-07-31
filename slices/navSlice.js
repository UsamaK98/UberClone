import { createSlice } from "@reduxjs/toolkit";

//Defining the initial state of the navigation slice in the data layer
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

//Defining navSlice  
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    //Defining setter function behaviors
    reducers: {
        //State represents current state of data and action is the new triggered action
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
})

//Allow our components to be accessible by the whole app
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;