import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { STATUS, countries, country } from "../../types";
import {
  addCountry,
  fetchCountries,
  removeCountry,
  updateCountries,
} from "../../services/country";

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

export const addCountryAction = createAsyncThunk(
  "post/countries",
  async (newCountry: { country: string; callback: any }) => {
    try {
      const data = await addCountry(newCountry.country);
      newCountry.callback();
      console.log("country  : ", data);
      return {
        data,
        success: true,
        code: 200,
      };
    } catch (error: any) {
      console.error("An error occurred while adding country:", error);
    }
  }
);
export const removeCountryAction = createAsyncThunk(
  "delete/countries",
  async (id: number) => {
    try {
      const res = await removeCountry(id);

      console.log("remove country : ", res);
      return {
        data: res,
        success: true,
        code: 200,
      };
    } catch (error: any) {
      console.error("An error occurred while removing data:", error);
    }
  }
);

export const updateCountryAction = createAsyncThunk(
  "update/countries",
  async (editData: { country: country; callback: any }) => {
    try {
      const data = await updateCountries(editData.country);
      console.log("country list : ", data);
      editData.callback();
      return {
        data,
        success: true,
        code: 200,
      };
    } catch (error: any) {
      console.error("An error occurred while updated country:", error);
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

    // add
    builder.addCase(addCountryAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addCountryAction.fulfilled, (state, action: any) => {
      const { data, code, success } = action.payload;

      if (success && code === 200) {
        state.status = "success";
        state.list = data;
      } else {
        state.status = "failed";
      }
    });
    builder.addCase(addCountryAction.rejected, (state) => {
      state.status = "failed";
    });

    //   remove
    builder.addCase(removeCountryAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(removeCountryAction.fulfilled, (state, action: any) => {
      const { data, code, success } = action.payload;

      if (success && code === 200) {
        state.status = "success";
        state.list = data;
      } else {
        state.status = "failed";
      }
    });
    builder.addCase(removeCountryAction.rejected, (state) => {
      state.status = "failed";
    });

    //   update
    builder.addCase(updateCountryAction.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateCountryAction.fulfilled, (state, action: any) => {
      const { data, code, success } = action.payload;

      if (success && code === 200) {
        state.status = "success";
        state.list = data;
      } else {
        state.status = "failed";
      }
    });
    builder.addCase(updateCountryAction.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const countryListStSelector = (state: RootState) => state.country.list;

export const countryStatusSelector = (state: RootState) => state.country.status;

export default countrySlice.reducer;
