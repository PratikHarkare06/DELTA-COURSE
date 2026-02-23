import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import "./InfoBox.css";

export default function InfoBox({ weatherInfo }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop";

  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2000&auto=format&fit=crop";
  const COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop";
  const RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2551&auto=format&fit=crop";

  const info = {
    city: weatherInfo?.city || "Delhi",
    feelsLike: weatherInfo?.feelsLike || 22.5,
    temp: weatherInfo?.temp || 24.3,
    humidity: weatherInfo?.humidity || 60,
    pressure: weatherInfo?.pressure || 1012,
    tempMin: weatherInfo?.tempMin || 18.3,
    tempMax: weatherInfo?.tempMax || 25.6,
    weatherMood: weatherInfo?.weatherMood || "Cloudy",
  };

  return (
    <div className="infoBox">
      <Card sx={{ maxWidth: '100%', minWidth: 350 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={
            info.humidity > 80 && info.temp > 15
              ? RAIN_URL
              : info.temp > 15
                ? HOT_URL
                : COLD_URL
          }
          title="weather image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component={"span"}>
            {info.city} {
              info.humidity > 80 && info.temp > 15
                ? <ThunderstormIcon />
                : info.temp > 15
                  ? <WbSunnyIcon />
                  : <AcUnitIcon />
            }
          </Typography>

          <Typography variant="body2" color="text.secondary" component={"div"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weatherMood}</i> and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Refresh</Button>
        </CardActions>
      </Card>
    </div>
  );
}
