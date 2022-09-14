import React from "react";
import { Link } from "react-router-dom";

import { FetchedDataVideos } from "../../../interfaces/fetchedDataInterface";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../../../utils/constants";

const VideoCard = ({ video }: { video: FetchedDataVideos }) => {
  return (
    <div className="bg-[#1e1e1e] h-[300px] w-[358px] flex flex-col items-center">
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <img
          src={video.snippet.thumbnails?.high?.url}
          alt={video.snippet.title}
          className="w-[358px] h-[180px] object-cover"
        />
      </Link>
      <div className="flex flex-col self-start p-5">
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
          className="text-white"
        >
          {video.snippet.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
        </Link>
        <Link
          to={
            video.snippet.channelId
              ? `/channel/${video.snippet.channelId}`
              : demoChannelUrl
          }
          className="text-[90%] text-gray-400 pt-4"
        >
          {video.snippet.channelTitle || demoChannelTitle}
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
