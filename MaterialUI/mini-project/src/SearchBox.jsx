import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  // Consider moving these to environment variables in a real application
  // Read from environment variables
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeatherInfo = async (city) => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse); // Debugging log
    if (jsonResponse.cod !== 200) {
      throw new Error(jsonResponse.message);
    }
    const result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      feelsLike: jsonResponse.main.feels_like,
      weatherMood: jsonResponse.weather[0].main,
    };
    return result;
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false); // Clear error when user types
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setError(false);
      const newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setCity(""); // Only clear input on success
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{ width: { xs: "100%", sm: 350 }, backgroundColor: "white", borderRadius: "4px" }}
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ height: 56, width: { xs: "100%", sm: "auto" } }}
        >
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
