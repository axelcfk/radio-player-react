import { useState, useEffect } from "react";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import SearchChannel from "./search";
import Channels from "./getChannels";

function App() {
  const [channels, setChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.sr.se/api/v2/channels?format=json&size=100"
        );

        if (!response.ok) {
          throw new Error(`Couldnt fetch. Status: ${response.status}`);
        }

        const result = await response.json();

        setTimeout(() => {
          setChannels(result.channels);
          console.log(result);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchChannel setSearchTerm={setSearchTerm} />

      <Channels filteredChannels={filteredChannels} isLoading={isLoading} />
    </>
  );
}

export default App;
