import { CheckIcon } from "@heroicons/react/24/solid";
import {
  addCountryAction,
  updateCountryAction,
} from "../redux/features/countrySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { countrySchema } from "../config";
import { country } from "../types";
import { useEffect } from "react";

interface IFormInputs {
  country: string;
}

type CountryInputType =
  | { action: "update"; country: country }
  | { action: "add"; country?: country };

const CountryInput = ({ action, country }: CountryInputType) => {
  const dispatch = useAppDispatch();
  // const countries = useAppSelector(countryListStSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (action === "add") {
      dispatch(addCountryAction({ country: data.country, callback: reset }));
      // console.log("data added:", data);
    }
    if (action === "update") {
      dispatch(
        updateCountryAction({
          country: { ...country, name: data.country },
          callback: reset,
        })
      );
      const dialog = document.getElementById("my_modal_3") as HTMLDialogElement;
      dialog.close();
      // console.log("data edit:", data, country);
    }
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    if (country && action == "update") {
      setValue("country", country.name);
    }
    return () => {};
  }, [country]);

  return (
    <div className="">
      <form
        className="flex flex-row form-control w-full max-w-xs"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          name="country"
          errors={errors}
          register={register}
          validationSchema={countrySchema}
        />

        <button
          type="submit"
          className="btn btn-square btn-ghost  hover:btn-outline hover:btn-success"
        >
          <CheckIcon className="w-8 h-8" />
        </button>
      </form>
    </div>
  );
};

export default CountryInput;
