import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { addCountry } from "../services/country";
import { addCountryAction } from "../redux/features/countrySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  country: string;
}

const CountryInput = ({ action = "add" }: { action?: "update" | "add" }) => {
  const dispatch = useAppDispatch();
  // const countries = useAppSelector(countryListStSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (action === "add") {
      dispatch(addCountryAction(data.country));
    }
    if (action === "update") {
      console.log("data edit:", data);
    }
  };
  console.log("errors :", errors["country"]?.message);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  return (
    <div className="">
      <form
        className="flex flex-row form-control w-full max-w-xs"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="country"
          className="form-control w-full max-w-xs space-x-3"
        >
          <input
            type="text"
            id="country"
            placeholder="Type country name here"
            className={`input input-bordered w-full max-w-xs ${
              errors.country ? "border-error " : ""
            }`}
            {...register("country", {
              required: { value: true, message: "must enter value " },
              minLength: { value: 3, message: "must be more than 3 letter" },
              maxLength: 80,
            })}
          />
          <div className="label h-10">
            <span className="label-text-alt text-error">
              {errors?.country?.message}
            </span>
          </div>
        </label>

        <button
          type="submit"
          className="btn btn-square btn-ghost  hover:btn-outline hover:btn-success"
        >
          <CheckIcon className="w-8 h-8" />
        </button>
      </form>

      {/* <form className="flex " onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">

          <input
            type="text"
            placeholder="Type country name here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </label>

        <button
          type="submit"
          className="btn btn-square btn-ghost  hover:btn-outline hover:btn-success"
        >
          <CheckIcon className="w-8 h-8" />
        </button>
      </form> */}
    </div>
  );
};

export default CountryInput;
