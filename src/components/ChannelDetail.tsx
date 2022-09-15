import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ChannelDetailProps } from "../interfaces/channelDetailInterface";
import { FetchedDataVideos } from "../interfaces/fetchedDataInterface";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos } from "./feed";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState<ChannelDetailProps>();
  const [videos, setVideos] = useState<FetchedDataVideos[]>();

  useEffect(() => {
    const fetchChannelDetail = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data.items[0]);
    };

    const fetchChannelVideos = async () => {
      const data = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );

      setVideos(data.items);
    };

    fetchChannelVideos();
    fetchChannelDetail();
  }, [id]);

  return (
    <div className=" min-h-[95vh] flex flex-col items-center">
      <div className="bg-gradient-to-r w-full from-cyan-500 to-blue-500 h-[300px]"></div>
      {channelDetail && (
        <div className="rounded-[20px] w-[358px] mt-[-93px] mb-10 flex justify-center items-center">
          <div className="flex flex-col justify-center text-center text-white">
            <img
              src={
                channelDetail.snippet.thumbnails.high.url || demoProfilePicture
              }
              alt="Profile"
              className="rounded-full h-[180px] w-[180px] mb-5"
            />
            <h1 className="text-[30px]">{channelDetail.snippet.title}</h1>
            <h1 className="">
              {channelDetail.statistics.subscriberCount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              Subscribers
            </h1>
          </div>
        </div>
      )}
      <div className="flex p-2">
        <div className="sm:mr-0 mr-[100px]"></div>
        {videos && <Videos videos={videos} direction="row" />}
      </div>
    </div>
  );
};

export default ChannelDetail;
