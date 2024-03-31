"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowCard from "./ShowCard";
import { RecommendedShow } from "@/lib/types";

const Secret = process.env.NEXT_PUBLIC_AZURE_SECRET;

const Hero = () => {
  const [events, setEvents] = useState<any[]>([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    className: "mt-10 ml-36 w-[1440px] absolute flex ",
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
      <div className="flex flex-col mx-auto space-y-5 pt-40">
        {/* heading */}
        <div>
          <h1 className="text-center text-white text-6xl leading-[90px] font-medium">
            Discover Exciting Events Happening
            <br />
            Near You - Stay Tuned For Updates!
          </h1>
        </div>
        {/* sun heading */}
        <div>
          <p className="text-center text-heading-color text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia qui hic quod facilis
            maxime?
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quam aliquam illo omnis!
          </p>
        </div>
      </div>

      {/* recommmended show section */}
      <div className="mt-24 text-xl">
        <div className="text-heading-color flex mx-36 justify-between">
          <p className="flex justify-center items-center font-medium">
            Recommended Shows <FaArrowRightLong className="ml-5" />
          </p>
          <p className="underline text-lg">See all</p>
        </div>
      </div>

      {/* event carousel Section */}
      <div className="absolute">
        <Slider {...settings}>
          {events.length > 0 &&
            events.map((show: RecommendedShow) => <ShowCard key={show.eventName} show={show} />)}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
