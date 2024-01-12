import { country } from "../types";
import CountryInput from "./CountryInput";

const EditCountry = ({ country }: { country: country }) => {
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
          <CountryInput action="update" country={country} />
        </div>
      </div>
    </dialog>
  );
};

export default EditCountry;
