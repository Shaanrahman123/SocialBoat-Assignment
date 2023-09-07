import React from "react";
import VideoCard from "./VideoCard";
import "../App.css";

function Results({ searchResults }) {
    return (
        <div className="container">
            {searchResults.map((result, index) => (
                <VideoCard
                    key={index}
                    video={result.video}
                    heading={result.heading}
                    tags={result.tags}
                />
            ))}
        </div>
    );
}

export default Results;
