# 🌦️ Weather App

A modern, responsive, and aesthetically pleasing weather application built using **React**, **Vite**, and **Material UI**. This app fetches real-time weather data from the OpenWeatherMap API and dynamically updates the user interface to reflect the current weather conditions (e.g., Hot, Cold, Rainy).

## 🚀 Features

*   **Real-Time Weather Data**: Get up-to-date weather information for any city worldwide.
*   **Dynamic UI**: The interface changes its look and feel based on the weather (Sunny, Snowy, Rainy).
*   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
*   **Modern Aesthetics**: Features a glassmorphism effect, smooth gradients, and Material UI components.
*   **Smart Search**: Includes error handling for invalid city names and prevents empty searches.
*   **Detailed Insights**: Displays Temperature, "Feels Like", Humidity, Pressure, Minimum/Maximum Temperature, and Weather Description.

## 🛠️ Tech Stack

*   **Frontend Framework**: [React](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **UI Library**: [Material UI (MUI)](https://mui.com/)
*   **Icons**: [MUI Icons](https://mui.com/material-ui/material-icons/)
*   **Styling**: CSS Modules, Flexbox, Glassmorphism
*   **API**: [OpenWeatherMap API](https://openweathermap.org/api)

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v16 or higher)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)

## 📦 Installation & Setup

Follow these steps to set up the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/PratikHarkare06/Weather-App.git
    cd Weather-App
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    *   Create a `.env` file in the root directory of the project.
    *   Add your OpenWeatherMap API key and base URL as shown below (or refer to `.env.example`):

    ```env
    VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
    VITE_API_KEY=your_openweather_api_key_here
    ```

    > **Note:** You can sign up for a free API key at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

4.  **Run the application**
    ```bash
    npm run dev
    ```

5.  **Access the App**
    Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```
mini-project/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── SearchBox.jsx    # Search component with API logic
│   ├── InfoBox.jsx      # Weather display card component
│   ├── WeatherApp.jsx   # Main container component
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   ├── *.css            # Component-specific styles
│   └── ...
├── .env                 # Environment variables (do not commit!)
├── .gitignore           # Git ignore rules
├── index.html           # HTML template
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [Pratik Harkare](https://github.com/PratikHarkare06)
