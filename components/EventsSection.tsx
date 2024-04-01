import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import EventCard from "./EventCard";

const EventsSection = () => {
  return (
    <div className="mx-36 mt-[550px] absolute ">
      {/* upcoming event heading */}
      <div className="flex items-center font-medium text-xl">
        Upcoming Event <FaArrowRightLong className="ml-5" />
      </div>
      {/* the main events section */}
      <div className="mt-14 flex flex-wrap gap-10">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default EventsSection;
