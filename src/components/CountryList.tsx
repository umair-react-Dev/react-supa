import { useEffect, useState } from "react";
import { countries, country } from "../types";
import { fetchCountries, removeCountry } from "../services/country";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import EditCountry from "./EditCountry";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  countryListStSelector,
  getCountriesAction,
  removeCountryAction,
} from "../redux/features/countrySlice";

const CountryList = () => {
  const [nowCountry, setNowCountry] = useState<country>({ id: 0, name: "" });
  const dispatch = useAppDispatch();
  const countries = useAppSelector(countryListStSelector);

  useEffect(() => {
    dispatch(getCountriesAction());
  }, []);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li
            className="flex h-10 justify-between my-3 items-center"
            key={country.id}
          >
            <div>{country.name}</div>
            <div className="flex flex-row justify-between items-center space-x-2">
              <button
                onClick={() => dispatch(removeCountryAction(country.id))}
                className="btn    hover:btn-error h-4"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn    hover:btn-warning h-4"
                onClick={() => {
                  setNowCountry(country);
                  const dialog = document.getElementById(
                    "my_modal_3"
                  ) as HTMLDialogElement;

                  dialog.showModal();
                }}
              >
                <PencilIcon className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <EditCountry country={nowCountry} />
    </div>
  );
};

export default CountryList;
