import React from "react";
import { FetchedDataVideos } from "../../interfaces/fetchedDataInterface";
import { VideoCard, ChannelCard } from "./feedCards";

import { v4 } from "uuid";

const Videos = ({ videos }: { videos: FetchedDataVideos[] }) => {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-x-5 gap-y-10 md:justify-center">
      {videos.map((item) => (
        <div className="" key={v4()}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
