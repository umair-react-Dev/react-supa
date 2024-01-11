// import { QueryData } from "@supabase/supabase-js"
import supabase from "../lib/supabase";
// import { Tables } from "../lib/supabase.types"
import { country } from "../types";
import { generateRandomIntegerInRange } from "@blackfiredev/utils";

export const addCountry = async (name: string) => {
  try {
    const newCountry = {
      id: Number(generateRandomIntegerInRange(99, 99999)),
      name,
    };
    const Query = supabase.from("countries").insert(newCountry);
    // type QueryType = QueryData<typeof Query>;
    const { data, error } = await Query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("countries updating error: ", error);
    return false;
  }
};

export const updateCountries = async (updatedObj: country) => {
  try {
    const Query = supabase
      .from("countries")
      .update(updatedObj)
      .eq("id", updatedObj.id);
    // type QueryType = QueryData<typeof Query>;
    const { data, error } = await Query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("countries updating error: ", error);
  }
};

export const removeCountry = async (id: number) => {
  try {
    const Query = supabase.from("countries").delete().eq("id", id);
    // type QueryType = QueryData<typeof Query>;
    const { data, error } = await Query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("countries deleting error: ", error);
  }
};

export const fetchCountries = async () => {
  try {
    const Query = supabase.from("countries").select();
    // type QueryType = QueryData<typeof Query>;
    const { data, error } = await Query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("countries fetching error: ", error);
  }
};
