import logo from './logo.svg';
import './App.css';
import TorontoCurrentWeather from "./components/TorontoCurrentWeather";

function App() {
  return (
    <div className="App container" >
        <div className="row justify-content-center align-items-center" style={{"height": "100vh"}}>
                <div className="col-auto justify-content-center rounded border d-flex flex-column">
                    <div className="px-4 pt-3 pb-2">
                        <h1>Toronto</h1>
                        <p>Weather info provided by the Open Weather API</p>
                    </div>
                    <div className="row px-4 pb-4 rounded d-flex">
                        <TorontoCurrentWeather/>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default App;
