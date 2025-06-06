import React from "react";
import { MdVerified } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
const VideoDetails = ({ data, videoActions }) => {
  return (
    <div>
      <h2 className="text-[#fff] font-semibold mt-3 mb-2 text-md lg:text-xl">
        {data?.name}
      </h2>
      <div className="bg-[#2a2a2a] my-4 rounded-[0.3rem] text-xs lg:text-sm p-3 text-[#fff]">
        <div className="flex flex-row md:items-center">
          <p className="font-medium pr-3 mb-2 md:mb-0">
            {data?.views}
            <span className="pl-1 text-xs">Views</span>
          </p>
          <p className="font-medium pr-3">{data?.uploadTime}</p>
        </div>
        <span className="text-center font-medium">{data?.description}</span>
      </div>
      
      {/* FIXED: Channel info và Action buttons cùng hàng */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Channel info + Subscribe button */}
        <div className="flex items-center flex-wrap">
          {!data.logo ? (
            <TailSpin visible height="20" width="20" color="#fff" />
          ) : (
            <img
              src={data.logo}
              alt={data.channel}
              className="h-[3rem] rounded-full p-1"
            />
          )}

          <div className="px-2 text-[#fff] text-sm">
            {data ? (
              <h3 className="text-[#fff] font-medium text-sm flex items-center">
                {data.channel.length <= 25
                  ? data.channel
                  : `${data.channel.substr(0, 20)}...`}

                <span className="p-1 text-[#909090]">
                  <MdVerified className="text-sm" />
                </span>
              </h3>
            ) : (
              "Loading..."
            )}

            <p className="text-xs text-[#909090]">
              {data ? data.subscribers : "0"} subscribers
            </p>
          </div>
          <button
            title="Subscribe"
            className="bg-[#fff] px-2 py-2 rounded-full text-xs font-semibold ml-2"
          >
            Subscribe
          </button>
        </div>

        {/* Action buttons (Like, Share, Download, etc.) */}
        <div className="flex-shrink-0">
          {videoActions}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
