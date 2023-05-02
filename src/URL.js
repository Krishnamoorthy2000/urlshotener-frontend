import React, { useState } from "react";
import axios from "axios";
import URL from "./App";
import "./URL.css";

function Shortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(`http://localhost:8080/shorten`);

      const response = await axios.post(`https://urlshortener-backend-uesn.onrender.com/shorten`, {
        url,
      });
      console.log(response);
      setShortUrl(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shortener-container">
      <h1>URL Shortener</h1>
      <form className="shortener-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div className="shortened-url">
          <p>Here is your shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default Shortener;
