import React from "react";
import { FetchedDataVideos } from "../../../interfaces/fetchedDataInterface";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../../../utils/constants";

const ChannelCard = ({
  channelDetail,
}: {
  channelDetail: FetchedDataVideos;
}) => {
  return (
    <div className="rounded-[20px] w-[358px] flex justify-center items-center">
      <Link to={`/channel/${channelDetail.id.channelId}`}>
        <div className="flex flex-col justify-center text-center text-white">
          <img
            src={
              channelDetail.snippet.thumbnails.high.url || demoProfilePicture
            }
            alt="Profile"
            className="rounded-full h-[180px] w-[180px] mb-5"
          />

          <h1 className="text-[30px]">{channelDetail.snippet.title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
