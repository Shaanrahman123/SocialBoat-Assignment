import React from "react";
import VideoCard from "./VideoCard";
import "../App.css";

function Results({ searchResults }) {
    return (
        <div className="container">
            <h1 className="result-heading">Search Results For "{searchResults[0].heading.split(":")[0]}"</h1>
            <div className="result-box">
                {searchResults.map((result, index) => (
                    <VideoCard
                        key={index}
                        video={result.video}
                        heading={result.heading}
                        tags={result.tags}
                    />
                ))}
            </div>
        </div>
    );
}

export default Results;
