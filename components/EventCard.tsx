import { UpcomingEvent } from "@/lib/types";
import { convertMetersToKilometers, formatDate, getThumbnailUrl } from "@/lib/utils";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const EventCard = ({ upcomingevent }: { upcomingevent: UpcomingEvent }) => {
  return (
    <div className="w-[350px] h-[400px] flex flex-col border-2 rounded-lg  ">
      <div className="relative self-center">
        <img
          src={getThumbnailUrl(upcomingevent.imgUrl)}
          alt={upcomingevent.eventName}
          className="object-cover w-[300px] h-[300px] self-center rounded-xl "
        />
        <div className="absolute bottom-5 bg-black bg-opacity-30 w-full">
          <p className="text-base text-heading-color font-bold px-2">
            {formatDate(upcomingevent.date)}
          </p>
        </div>
      </div>
      <div className="flex flex-col text-base px-4 space-y-2 ">
        <div className="flex items-center">
          <h6 className="text-lg font-medium">{upcomingevent.eventName}</h6>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm flex justify-center items-center space-x-2">
            <FaLocationDot className="text-gray-400" />
            <p>{upcomingevent.cityName}</p>
          </div>
          <p className="text-sm">
            {upcomingevent.weather} | {convertMetersToKilometers(upcomingevent.distanceKm)} km
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

// {
//       "eventName": "Winter Wonderland Fair",
//       "cityName": "West Douglas",
//       "date": "2024-03-24T00:00:00.000Z",
//       "weather": "Snowy 26C",
//       "distanceKm": "4264.1226847222415",
//       "imgUrl": "https://drive.google.com/file/d/1eCTPLcYF_u8mcAlmZ2-SN2_j-aiWA_7y/view"
//     },
// https://drive.google.com/thumbnail?id=${fileId}&sz=w1000
