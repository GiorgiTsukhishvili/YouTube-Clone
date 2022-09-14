import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ChannelDetailProps } from "../interfaces/channelDetailInterface";
import { FetchedDataVideos } from "../interfaces/fetchedDataInterface";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos } from "./feed";
import { ChannelCard } from "./feed/feedCards";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState<ChannelDetailProps>();
  const [videos, setVideos] = useState<FetchedDataVideos>();

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

  return <div>ChannelDetail</div>;
};

export default ChannelDetail;
