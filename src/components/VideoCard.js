import React from "react";
import "../App.css";

function VideoCard({ video, heading, tags }) {
    return (
        <div className="video-card">
            <div className="video-box">
                <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content">
                <h3>{heading.split(":")[0]}</h3>
                <div className="tag-box">
                    {tags.map((tag, index) => (
                        <p key={index}>{tag.split(" ")[0]}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
