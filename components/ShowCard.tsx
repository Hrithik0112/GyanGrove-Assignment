import React from "react";

import { convertMetersToKilometers, formatDate, getThumbnailUrl } from "@/lib/utils";
import { FaLocationDot } from "react-icons/fa6";
import { RecommendedShow } from "@/lib/types";

const ShowCard = ({ show }: { show: RecommendedShow }) => {
  return (
    <div className="h-[450px] w-[280px] relative rounded-lg text-heading-color">
      <img
        src={getThumbnailUrl(show.imgUrl)}
        alt={show.eventName}
        className="object-cover w-full h-full scale-y-110 "
      />
      <div className="absolute bottom-0 w-full flex flex-col px-2">
        <div className="flex justify-between items-center">
          <h6 className="text-lg font-medium">{show.eventName}</h6>
          <p className="text-base">{formatDate(show.date)}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm flex justify-center items-center space-x-2">
            <FaLocationDot className="text-gray-400" />
            <p>{show.cityName}</p>
          </div>
          <p className="text-sm">
            {show.weather} | {convertMetersToKilometers(show.distanceKm)} km
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
