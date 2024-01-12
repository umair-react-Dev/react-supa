import CountryInput from "./components/CountryInput";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <CountryInput action="add" />
      </div>
      <div className=" w-52">
        <CountryList />
      </div>
    </div>
  );
}

export default App;
