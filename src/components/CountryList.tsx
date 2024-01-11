import { useEffect, useState } from "react";
import { countries } from "../types";
import { fetchCountries, removeCountry } from "../services/country";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import EditCountry from "./EditCountry";

const CountryList = () => {
  const [countries, setCountries] = useState<countries>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const data = await fetchCountries();
    setCountries(data as countries);
  }

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
                onClick={() => removeCountry(country.id)}
                className="btn    hover:btn-error h-4"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn    hover:btn-warning h-4"
                onClick={() => {
                  const dialog = document.getElementById(
                    "my_modal_3"
                  ) as HTMLDialogElement;

                  dialog.showModal();
                }}
              >
                <PencilIcon className="h-5 w-5" />
              </button>
            </div>
            <EditCountry country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
