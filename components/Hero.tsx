"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowCard from "./ShowCard";
import { RecommendedShow } from "@/lib/types";
import EventsSection from "./EventsSection";

const Secret = process.env.NEXT_PUBLIC_AZURE_SECRET;

const Hero = () => {
  const [events, setEvents] = useState<any[]>([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    className: "sm:mt-10 sm:ml-36 mt-5 ml-12 w-[1440px] absolute flex ",
  };
  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const response = await fetch(
          `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${Secret}==&type=reco`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShowData();
  }, []);
  return (
    <div className="bg-[url(/Banner.svg)] bg-cover w-screen min-h-screen relative ">
      {/* Hero text */}
      <div className="flex flex-col sm:mx-auto mx-10  space-y-5 sm:pt-40 pt-10">
        {/* heading */}
        <div>
          <h1 className="text-center text-white sm:text-6xl text-2xl leading-[60px] text-wrap sm:leading-[90px] font-medium">
            Discover Exciting Events Happening <br className="hidden sm:inline-block" />
            Near You - Stay Tuned For Updates!
          </h1>
        </div>
        {/* sun heading */}
        <div className="flex items-center justify-center">
          <p className="text-center text-heading-color text-lg hidden sm:inline-block sm:mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia qui hic quod facilis
            maxime?
            <br className="hidden sm:inline-block" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quam aliquam illo omnis!
          </p>
          <p className="text-lg leading-10 text-wrap sm:hidden text-center text-heading-color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam repellat temporibus,
            consequuntur iure modi.
          </p>
        </div>
      </div>

      {/* recommmended show section */}
      <div className="sm:mt-24 mt-10 sm:text-xl text-base">
        <div className="text-heading-color flex sm:mx-36 mx-10 justify-between">
          <p className="flex justify-center items-center font-medium">
            Recommended Shows <FaArrowRightLong className="ml-5" />
          </p>
          <p className="underline sm:text-xl text-sm">See all</p>
        </div>
      </div>

      {/* event carousel Section */}
      <div className="absolute">
        <Slider {...settings}>
          {events.length > 0 &&
            events.map((show: RecommendedShow) => <ShowCard key={show.eventName} show={show} />)}
        </Slider>
      </div>

      {/* upcoing events */}
      <EventsSection />
    </div>
  );
};

export default Hero;
