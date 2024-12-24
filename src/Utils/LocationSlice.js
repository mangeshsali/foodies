import { createSlice } from "@reduxjs/toolkit";

const LocationSlice = createSlice({
  name: "locationDetail",
  initialState: {
    locationId: "ChIJARFGZy6_wjsRQ-Oenb9DjYI",
    address: "Pune",
    lat: "18.5204303",
    lng: "73.8567437",
  },
  reducers: {
    addLocation: (state, action) => {
      state.locationId = action.payload;
    },
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addLat: (state, action) => {
      state.lat = action.payload;
    },
    addLng: (state, action) => {
      state.lng = action.payload;
    },
  },
});

export const { addLocation, addLat, addLng, addAddress } =
  LocationSlice.actions;

export default LocationSlice.reducer;
