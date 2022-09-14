import React, { useEffect, useState } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { FetchedDataVideos } from "../../interfaces/fetchedDataInterface";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [error, setError] = useState<boolean>(false);
  const [videos, setVideos] = useState<FetchedDataVideos[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetched = await fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(fetched.items);
      } catch (err) {
        setError(true);
      }
    };

    getData();
  }, [selectedCategory]);

  return (
    <div className="flex flex-row md:flex-col">
      <div className="h-[91vh] md:h-auto border-r-[1px] border-[#3d3d3d] px-2 md:px-0">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <h1 className="copyright mt-2.5 text-white ">Copyright 2022 YouTube</h1>
      </div>

      <div className="p-2 overflow-y-auto h-[94vh] ">
        <h1 className=" font-bold mb-2 text-white text-[28px]">
          {selectedCategory} <span className="text-[#F31503]">Videos</span>
        </h1>

        {error ? (
          <h1 className="text-white text-3xl absolute top-[40%] left-[40%] text-center">
            404 It Was Not possible to Get Videos, <br />
            Try Different Category
          </h1>
        ) : (
          <Videos videos={videos} />
        )}
      </div>
    </div>
  );
};

export default Feed;
