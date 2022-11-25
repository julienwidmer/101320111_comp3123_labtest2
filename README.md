# COMP 3123 - Lab Test 2

Use the [Open Weather API](https://openweathermap.org/) to retrieve and display weather forecast for Toronto, ON.

## Notes
* The Postman collection is available in the resources folder `./resources/LabTest2.postman_collection`
* Screenshots of the app, Postman and outputs are available in the screenshots folder `./resources/screenshots/*.png`

---

## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Run React app

```bash
npm start
```

You can browse the app at <http://localhost:3000>

---

## Instructions

1. Replace `{{API_KEY}}` with your API key inside `TorontoCurrentWeather.js` (line 12) and
inside `TorontoFutureWeather.js` (line 10).

---

# Preview of the app
![Screenshot of the app running in a browser](./resources/screenshots/S1-Browser-Preview.png)

## Usage of the weather icons provided by the Open Weather API
![Screenshot of the app running in a browser with a weather icon highlighted](./resources/screenshots/S2-OpenWeather-Icon.png)

## Terminal Output
The app runs with 2 deprecation warnings and 0 errors.
![Screenshot of the terminal output after running the app](./resources/screenshots/S7-Terminal-Output.png)

---

# Part 1 - Current Weather Forecast
Displays the current weather forecast.

This component is coded in `TorontoCurrentWeather.js` inside the `components` folder and uses the:
-  [Current Weather Data - Open Weather API](https://openweathermap.org/current)
![Screenshot of the app running in a browser with the current weather highlighted](./resources/screenshots/S3-OpenWeather-CurrentWeather.png)

## Postman response input
Note: The API was removed from the parameters in Postman AFTER performing the request and BEFORE taking the screenshot.
![Screenshot of Postman using the Current Weather Data API](./resources/screenshots/S5-Postman-OpenWeather-CurrentWeather.png)

---
# Part 2 - Future Weather Forecast
Displays the weather forecast for the next 3 days.

This component is coded in `TorontoFutureWeather.js` inside the `components` folder and uses the:
- [Daily Forecast 16 Days - Open Weather API](https://openweathermap.org/forecast16)
![Screenshot of the app running in a browser with the future weather highlighted](./resources/screenshots/S4-OpenWeather-FutureWeather.png)

## Postman response input
Note: The API was removed from the parameters in Postman AFTER performing the request and BEFORE taking the screenshot.
![Screenshot of Postman using the Daily Forecast 16 Days API](./resources/screenshots/S6-Postman-OpenWeather-FutureWeather.png)
