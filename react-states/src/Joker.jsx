import { useState, useEffect } from "react";

export default function Joker() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  // Fetch joke when component loads
  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      <h1>Joker</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>Get New Joke</button>
    </div>
  );
}
