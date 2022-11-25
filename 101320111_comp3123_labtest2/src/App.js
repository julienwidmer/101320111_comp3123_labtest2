import './App.css';
import TorontoCurrentWeather from "./components/TorontoCurrentWeather";
import TorontoFutureWeather from "./components/TorontoFutureWeather";

function App() {
  return (
    <div className="App container" >
        <div className="col-auto justify-content-center rounded border d-flex flex-column mt-3">
            <div className="px-4 pt-3 pb-2">
                <h1>Toronto</h1>
                <p>Weather info provided by the Open Weather API</p>
            </div>
            <div className="col-auto text-start row px-4 pb-4">
                <TorontoCurrentWeather/>
                <TorontoFutureWeather/>
            </div>
        </div>
    </div>
  );
}

export default App;
