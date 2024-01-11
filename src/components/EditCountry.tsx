import { useState } from "react";
import { country } from "../types";
import { updateCountries } from "../services/country";

const EditCountry = ({ country }: { country: country }) => {
  const [PreCountry, setPreCountry] = useState(country);

  async function handleClick() {
    try {
      const res = await updateCountries(PreCountry);

      if (res) {
        return false;
      }
      const dialog = document.getElementById("my_modal_3") as HTMLDialogElement;

      dialog.close();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-row justify-evenly items-center">
          <input
            className="input bg-secondary input-bordered"
            onChange={(e) =>
              setPreCountry({ ...PreCountry, name: e.target.value })
            }
            type="text"
            value={PreCountry.name}
            id={String(PreCountry.id)}
          />
          <button
            className="btn btn-outline px-3 py-2"
            onClick={() => handleClick()}
          >
            Update
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default EditCountry;
