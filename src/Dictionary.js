import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation - https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  let pexelsApiKey = "563492ad6f917000010000014160d6df3aa44977b2706ec7b6312f62";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
  let headers = { Authorization: `Bearer ${pexelsApiKey}` };

  axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />;
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
