import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { STATUS, countries } from "../../types";
import { fetchCountries } from "../../services/country";

interface CountryState {
  list: countries;
  status: STATUS;
  error: null | string;
}

export const initialState: CountryState = {
  list: [],
  status: "idle",
  error: null,
};

export const getCountriesAction = createAsyncThunk(
  "get/countries",
  async () => {
    try {
      const data = await fetchCountries();
      console.log("country list : ", data);
      return {
        data,
        success: true,
        code: 200,
      };
    } catch (error: any) {
      console.error("An error occurred while fetching data:", error);
    }
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCountriesAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCountriesAction.fulfilled, (state, action: any) => {
      const { data, code, success } = action.payload;

      if (success && code === 200) {
        state.status = "success";
        state.list = data;
      } else {
        state.status = "failed";
      }
    });
    builder.addCase(getCountriesAction.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const countryListStSelector = (state: RootState) => state.country.list;

export const countryStatusSelector = (state: RootState) => state.country.status;

export default countrySlice.reducer;
