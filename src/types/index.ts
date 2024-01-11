import { Tables } from "../lib/supabase.types";

export type country = Tables<"countries">;
export type countries = country[];

export type STATUS = "idle" | "loading" | "success" | "failed";
