import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import axios from "axios";
import Home from "./components/Home";
import debounce from "lodash/debounce";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputRef = useRef(null); // Create a ref for the input field

  const focusInput = () => {
    // Function to focus on the input field
    inputRef.current.focus();
  };


  const debouncedFetchData = useCallback(
    debounce(async (query) => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos",
          {
            params: {
              q: query,
              numResults: 12,
            },
          }
        );

        if (query !== "") {
          setSearchResults(response.data.results);
        } else {
          setSearchResults([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    }, 600),
    []
  );

  useEffect(() => {
    if (searchQuery !== "") {
      debouncedFetchData(searchQuery);
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [searchQuery, debouncedFetchData]);

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} inputRef={inputRef} />
      {loading && <div id="preloader"></div>}
      {error && <p>{error}</p>}
      {!loading && !error && (searchQuery !== "" ? <Results searchResults={searchResults} /> : <Home focusInput={focusInput} />)}
    </div>
  );
}

export default App;
