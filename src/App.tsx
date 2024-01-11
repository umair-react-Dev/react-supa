import AddCountry from "./components/AddCountry";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <AddCountry />
      </div>
      <div className=" w-52">
        <CountryList />
      </div>
    </div>
  );
}

export default App;
