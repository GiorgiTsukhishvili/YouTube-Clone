import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { Videos } from "./feed";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { VideoDetailProps } from "../interfaces/videoDetailInterface";
import { FetchedDataVideos } from "../interfaces/fetchedDataInterface";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState<VideoDetailProps>();
  const [rellatedvideos, setRelatedVides] = useState<FetchedDataVideos[]>();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFromAPI(
        `videos?part=snippet,statistics&id=${id}`
      );

      setVideoDetails(data.items[0]);
    };

    const getVideos = async () => {
      const data = await fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );

      setRelatedVides(data.items);
    };

    getVideos();
    getData();
  }, [id]);

  return (
    <div className="min-h-[95vh]">
      <div className="flex flex-row sm:flex-col">
        <div className="flex-1">
          <div className="w-full sticky top-[86px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <h1 className="text-white font-bold p-2 text-2xl">
              {videoDetails?.snippet.title}
            </h1>
            <div className="flex flex-row justify-between  py-1 px-2">
              <Link to={`/channel/${videoDetails?.snippet.channelId}`}>
                <h1 className="text-white">
                  {videoDetails?.snippet.channelTitle}
                </h1>
              </Link>
              <div className="flex flex-row gap-[20px] items-center">
                <h1 className="opacity-75 text-white">
                  {videoDetails &&
                    parseInt(
                      videoDetails?.statistics.viewCount
                    ).toLocaleString()}{" "}
                  views
                </h1>

                <h1 className="opacity-75 text-white">
                  {videoDetails &&
                    parseInt(
                      videoDetails?.statistics.likeCount
                    ).toLocaleString()}{" "}
                  likes
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex px-2 py-1 sm:py-5 justify-center items-center">
          {rellatedvideos && <Videos videos={rellatedvideos} direction="col" />}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
