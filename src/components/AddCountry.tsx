import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { addCountry } from "../services/country";

const AddCountry = () => {
  const [country, setCountry] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (country.length > 3) {
      const error = await addCountry(country);
      if (error === null) {
        setCountry((prev) => {
          prev = "";
          return prev;
        });
        console.log("result", error);
      }
    }
  };

  return (
    <div className="my-7">
      <form className="flex " onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          {/* <div className="label">
          <span className="label-text">Country</span>
        </div> */}
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
      </form>
    </div>
  );
};

export default AddCountry;
