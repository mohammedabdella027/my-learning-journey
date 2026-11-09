import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(
            "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhdLIlu-We-R4Nw0xwJ3QE2ZceOJVc1Dg&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet&order=date&maxResults=12&type=video",
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.items) {
                    setYoutubeVideos(data.items);
                } else {
                    setError("Unable to load videos.");
                }

                setLoading(false);
            })
            .catch(() => {
                setError("Something went wrong.");
                setLoading(false);
            });
    }, []);

    return (
        <section className="youtube-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold">Latest Videos</h1>

                    <p className="text-muted">
                        Latest videos from Apple's official YouTube Channel
                    </p>
                </div>

                {loading && (
                    <div className="text-center">
                        <div className="spinner-border text-dark" role="status"></div>
                    </div>
                )}

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="row g-4">
                    {youtubeVideos?.map((video, index) => {
                        const videoLink =
                            "https://www.youtube.com/watch?v=" + video.id.videoId;

                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="card youtube-card h-100">
                                    <img
                                        src={video.snippet.thumbnails.high.url}
                                        className="card-img-top"
                                        alt={video.snippet.title}
                                    />

                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{video.snippet.title}</h5>

                                        <p className="text-muted small">
                                            {new Date(video.snippet.publishedAt).toDateString()}
                                        </p>

                                        <p className="card-text">
                                            {video.snippet.description.substring(0, 100)}
                                            ...
                                        </p>

                                        <a
                                            href={videoLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-dark mt-auto"
                                        >
                                            ▶ Watch Video
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default YoutubeVideos;
