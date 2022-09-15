import React, { useEffect, useState } from "react";
import { Videos } from "./feed";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { FetchedDataVideos } from "../interfaces/fetchedDataInterface";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [error, setError] = useState<boolean>(false);
  const [videos, setVideos] = useState<FetchedDataVideos[]>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetched = await fetchFromAPI(
          `search?part=snippet&q=${searchTerm}`
        );
        setVideos(fetched.items);
      } catch (err) {
        setError(true);
      }
    };

    getData();
  }, [searchTerm]);

  return (
    <div className="p-2 overflow-y-auto h-[94vh] ">
      <h1 className=" font-bold mb-2 text-white text-[28px]">
        Search Results for: <span className="text-[#F31503]">{searchTerm}</span>
      </h1>

      {error ? (
        <h1 className="text-white text-3xl absolute top-[40%] left-[40%] text-center">
          404 It Was Not possible to Get Videos, <br />
          Try Different Search
        </h1>
      ) : (
        <Videos videos={videos} direction='row' />
      )}
    </div>
  );
};

export default SearchFeed;
